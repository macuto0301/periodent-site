<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="flex items-center gap-4 pb-4 border-b">
      <NuxtLink 
        to="/admin/categories"
        class="text-purple-600 hover:text-purple-800 flex items-center gap-2"
      >
        ← Volver a Categorías
      </NuxtLink>
      <h1 class="text-3xl font-bold text-gray-900">{{ isEditing ? 'Editar Categoría' : 'Nueva Categoría' }}</h1>
    </div>

    <!-- Loading -->
    <div v-if="isLoadingCategory" class="text-center py-12">
      <div class="animate-spin inline-block w-8 h-8 border-4 border-gray-300 border-t-purple-600 rounded-full"></div>
      <p class="text-gray-600 mt-4">Cargando categoría...</p>
    </div>

    <!-- Main Form -->
    <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Form -->
      <form @submit.prevent="handleSubmit" class="lg:col-span-2 space-y-6">
        
        <!-- Error Alert -->
        <div v-if="error" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-start gap-3">
          <div class="text-xl">⚠️</div>
          <div>
            <h3 class="font-medium">Error</h3>
            <p class="text-sm mt-1">{{ error }}</p>
          </div>
        </div>

        <!-- Nombre -->
        <div class="bg-white rounded-lg shadow p-6">
          <label class="block text-sm font-semibold text-gray-900 mb-2">
            Nombre de la Categoría *
          </label>
          <input
            v-model="form.name"
            type="text"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
            placeholder="Ej: Ortodoncia"
            @input="generateSlugFromName"
          />
          <p class="text-sm text-gray-500 mt-2">Sé claro y descriptivo</p>
        </div>

        <!-- Slug -->
        <div class="bg-white rounded-lg shadow p-6">
          <label class="block text-sm font-semibold text-gray-900 mb-2">
            URL Amigable (Slug)
          </label>
          <div class="flex items-center gap-2">
            <span class="text-gray-600">periodent.com.ve/blog/categoria/</span>
            <input
              v-model="form.slug"
              type="text"
              class="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="slug-categoria"
            />
          </div>
          <p class="text-sm text-gray-500 mt-2">Solo caracteres alfanuméricos y guiones</p>
        </div>

        <!-- Descripción -->
        <div class="bg-white rounded-lg shadow p-6">
          <label class="block text-sm font-semibold text-gray-900 mb-2">
            Descripción
          </label>
          <textarea
            v-model="form.description"
            rows="4"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Describe el contenido de esta categoría"
          ></textarea>
          <div class="flex justify-between items-center mt-2">
            <p class="text-sm text-gray-500">Aparecerá en la descripción de la categoría</p>
            <span class="text-xs text-gray-400">{{ form.description.length }} caracteres</span>
          </div>
        </div>

        <!-- Buttons -->
        <div class="bg-white rounded-lg shadow p-6 flex gap-3 justify-between">
          <NuxtLink 
            to="/admin/categories"
            class="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-medium transition"
          >
            Cancelar
          </NuxtLink>
          <div class="flex gap-3">
            <button
              v-if="isEditing"
              type="button"
              @click="deleteNow"
              :disabled="isLoading"
              class="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium transition disabled:opacity-50"
            >
              🗑️ Eliminar
            </button>
            <button
              type="submit"
              :disabled="isLoading"
              class="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium transition disabled:opacity-50 flex items-center gap-2"
            >
              <span v-if="isLoading">⏳</span>
              <span v-else>✓</span>
              {{ isLoading ? 'Guardando...' : isEditing ? 'Guardar Cambios' : 'Crear Categoría' }}
            </button>
          </div>
        </div>
      </form>

      <!-- Sidebar Preview -->
      <div class="space-y-4">
        <!-- Preview Card -->
        <div class="bg-white rounded-lg shadow p-6 sticky top-20">
          <h3 class="text-sm font-semibold text-gray-900 mb-4">Vista Previa</h3>
          <div class="bg-gray-50 rounded-lg p-4 space-y-3">
            <!-- Name Preview -->
            <div class="text-sm">
              <span class="text-gray-600 text-xs uppercase font-semibold">Nombre</span>
              <p class="text-gray-900 font-semibold mt-1">{{ form.name || 'Tu nombre' }}</p>
            </div>

            <!-- Slug Preview -->
            <div class="border-t pt-3 text-sm">
              <span class="text-gray-600 text-xs uppercase font-semibold">URL</span>
              <p class="text-purple-600 text-xs mt-1 break-all">periodent.com.ve/blog/categoria/{{ form.slug }}</p>
            </div>

            <!-- Description Preview -->
            <div class="border-t pt-3 text-sm">
              <span class="text-gray-600 text-xs uppercase font-semibold">Descripción</span>
              <p class="text-gray-600 text-xs mt-1">{{ form.description || 'Sin descripción' }}</p>
            </div>

            <!-- Stats -->
            <div v-if="isEditing" class="border-t pt-3 text-xs text-gray-600">
              <p class="mb-1">📊 Posts en esta categoría: <strong>{{ postCount }}</strong></p>
              <p v-if="form.createdAt" class="mb-1">📅 Creada: {{ formatDate(form.createdAt) }}</p>
              <p v-if="form.updatedAt">🔄 Actualizada: {{ formatDate(form.updatedAt) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin',
  middleware: 'admin'
});

const route = useRoute();
const router = useRouter();
const { getCategory, updateCategory, deleteCategory: deleteCategoryApi, createCategory } = useAdminApi();
const { isAuthenticated } = useAdminAuth();

const categoryId = parseInt(route.params.id as string) || null;
const isEditing = !!categoryId && categoryId > 0;

const form = reactive({
  id: null,
  name: '',
  slug: '',
  description: '',
  createdAt: '',
  updatedAt: ''
});

const isLoading = ref(false);
const isLoadingCategory = ref(false);
const error = ref<string | null>(null);
const postCount = ref(0);

const generateSlugFromName = () => {
  if (!form.slug || form.slug.startsWith('cat-')) {
    form.slug = form.name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
};

const formatDate = (date: string) => {
  if (!date) return '-';
  return new Date(date).toLocaleString('es-ES', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

const loadCategory = async () => {
  if (!isEditing) return;
  
  isLoadingCategory.value = true;
  try {
    const categoryData = await getCategory(categoryId!);
    // Mapear campos del backend al formulario
    form.id = categoryData.id;
    form.name = categoryData.name || '';
    form.slug = categoryData.slug || '';
    form.description = categoryData.description || '';
    form.createdAt = categoryData.createdAt || '';
    form.updatedAt = categoryData.updatedAt || '';
    postCount.value = parseInt(categoryData.post_count || 0);
  } catch (err: any) {
    error.value = 'No se pudo cargar la categoría: ' + err.message;
  } finally {
    isLoadingCategory.value = false;
  }
};

const handleSubmit = async () => {
  isLoading.value = true;
  error.value = null;

  try {
    if (!form.name.trim()) {
      error.value = 'El nombre es requerido';
      isLoading.value = false;
      return;
    }

    if (!form.slug) {
      form.slug = `cat-${Date.now().toString().slice(-6)}`;
    }

    const data = {
      id: categoryId,
      name: form.name.trim(),
      slug: form.slug.trim(),
      description: form.description.trim(),
      createdAt: form.createdAt,
      updatedAt: form.updatedAt
    };

    if (isEditing) {
      await updateCategory(data);
    } else {
      await createCategory(data);
    }

    await router.push('/admin/categories');
  } catch (err: any) {
    error.value = err.message || 'Error al guardar la categoría';
  } finally {
    isLoading.value = false;
  }
};

const deleteNow = async () => {
  if (!confirm('¿Estás seguro de que quieres eliminar esta categoría?')) {
    return;
  }

  isLoading.value = true;
  error.value = null;

  try {
    await deleteCategoryApi(categoryId!);
    await router.push('/admin/categories');
  } catch (err: any) {
    error.value = 'Error al eliminar: ' + err.message;
    isLoading.value = false;
  }
};

onMounted(() => {
  if (!isAuthenticated.value) {
    navigateTo('/admin/login');
  }
  if (isEditing) {
    loadCategory();
  }
});
</script>
