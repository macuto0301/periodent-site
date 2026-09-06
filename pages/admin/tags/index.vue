<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl shadow-xl p-8 text-white">
      <div class="flex justify-between items-center">
        <div>
          <h1 class="text-4xl font-bold mb-2">🏷️ Gestión de Tags</h1>
          <p class="text-indigo-100">Organiza el contenido con etiquetas</p>
        </div>
        <NuxtLink 
          to="/admin/tags/new"
          class="bg-white text-indigo-600 px-6 py-3 rounded-xl hover:bg-indigo-50 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
        >
          <span class="text-xl">+</span> 
          <span>Nuevo Tag</span>
        </NuxtLink>
      </div>
      
      <div class="grid grid-cols-2 gap-4 mt-6">
        <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
          <div class="text-2xl mb-1">{{ tags.length }}</div>
          <div class="text-sm text-indigo-100">Tags totales</div>
        </div>
        <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
          <div class="text-2xl mb-1">{{ totalPosts }}</div>
          <div class="text-sm text-indigo-100">Posts asociados</div>
        </div>
      </div>
    </div>

    <div v-if="isLoading" class="text-center py-16">
      <div class="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-indigo-600"></div>
      <p class="text-gray-600 mt-4 font-medium">Cargando tags...</p>
    </div>

    <div v-else-if="error" class="bg-red-50 border-2 border-red-200 text-red-700 px-6 py-4 rounded-xl flex items-center gap-3">
      <span class="text-2xl">⚠️</span>
      <div>
        <div class="font-semibold">Error al cargar tags</div>
        <div class="text-sm">{{ error }}</div>
      </div>
    </div>

    <div v-else class="grid gap-4">
      <div 
        v-for="tag in tags" 
        :key="tag.id" 
        class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-200 overflow-hidden border border-gray-100 hover:border-indigo-200 group"
      >
        <div class="p-6">
          <div class="flex items-start justify-between">
            <div class="flex-1 min-w-0 pr-4">
              <div class="flex items-center gap-3 mb-2">
                <h3 class="text-lg font-bold text-gray-900 truncate group-hover:text-indigo-600 transition-colors">
                  {{ tag.name }}
                </h3>
                <span class="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 border border-indigo-200 flex-shrink-0">
                  {{ tag.post_count || 0 }} posts
                </span>
              </div>
              
              <p class="text-sm text-gray-600 mb-3 line-clamp-2">
                {{ tag.description || 'Sin descripción' }}
              </p>
              
              <div class="flex items-center gap-4 text-xs text-gray-500">
                <div class="flex items-center gap-1">
                  <span>🔗</span>
                  <span class="font-mono">{{ tag.slug }}</span>
                </div>
                <div class="flex items-center gap-1">
                  <span>🆔</span>
                  <span>#{{ tag.id }}</span>
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-2 flex-shrink-0">
              <NuxtLink 
                :to="`/admin/tags/${tag.id}`"
                class="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
              >
                <span>✏️</span>
                <span>Editar</span>
              </NuxtLink>
              <button 
                @click="deleteTag(tag.id)"
                class="px-4 py-2 bg-red-50 text-red-600 text-sm font-medium rounded-lg hover:bg-red-100 transition-colors flex items-center gap-2 border border-red-200"
              >
                <span>🗑️</span>
                <span>Eliminar</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div v-if="tags.length === 0" class="text-center py-16 bg-white rounded-xl shadow-md">
        <div class="text-6xl mb-4">🏷️</div>
        <h3 class="text-xl font-bold text-gray-900 mb-2">No hay tags todavía</h3>
        <p class="text-gray-600 mb-6">Comienza creando tu primer tag</p>
        <NuxtLink 
          to="/admin/tags/new"
          class="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 font-semibold"
        >
          <span>+</span>
          <span>Crear Primer Tag</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin',
  middleware: 'admin'
});

const { getTags, deleteTag: deleteTagApi } = useAdminApi();
const { isAuthenticated } = useAdminAuth();

interface Tag {
  id: string | number;
  name: string;
  slug: string;
  description?: string;
  post_count?: string | number;
}

const tags = ref<Tag[]>([]);
const isLoading = ref(false);
const error = ref<string | null>(null);

const totalPosts = computed(() => {
  return tags.value.reduce((sum, tag) => sum + (parseInt(tag.post_count as string) || 0), 0);
});

const loadTags = async () => {
  isLoading.value = true;
  error.value = null;
  try {
    const data = await getTags(1);
    tags.value = data.tags || [];
    // Si necesitas paginación, puedes usar data.total, data.page, data.pageSize
  } catch (err: any) {
    error.value = err.message;
  } finally {
    isLoading.value = false;
  }
};

const deleteTag = async (id: string | number) => {
  if (!confirm('¿Eliminar este tag?')) return;
  
  try {
    await deleteTagApi(parseInt(id as string));
    await loadTags();
  } catch (err: any) {
    error.value = err.message;
  }
};

onMounted(() => {
  if (!isAuthenticated.value) {
    navigateTo('/admin/login');
  }
  loadTags();
});
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>