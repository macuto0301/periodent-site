<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="flex items-center gap-4 pb-4 border-b">
      <NuxtLink 
        to="/admin/posts"
        class="text-blue-600 hover:text-blue-800 flex items-center gap-2"
      >
        ← Volver a Posts
      </NuxtLink>
      <h1 class="text-3xl font-bold text-gray-900">{{ isEditing ? 'Editar Post' : 'Cargar...' }}</h1>
    </div>

    <!-- Loading -->
    <div v-if="isLoadingPost" class="text-center py-12">
      <div class="animate-spin inline-block w-8 h-8 border-4 border-gray-300 border-t-blue-600 rounded-full"></div>
      <p class="text-gray-600 mt-4">Cargando post...</p>
    </div>

    <!-- Main Form Container -->
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

        <!-- Título -->
        <div class="bg-white rounded-lg shadow p-6">
          <label class="block text-sm font-semibold text-gray-900 mb-2">
            Título del Post *
          </label>
          <input
            v-model="form.title"
            type="text"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            placeholder="Ej: Guía completa de cuidado dental"
            @input="generateSlugFromTitle"
          />
          <p class="text-sm text-gray-500 mt-2">Sé claro y descriptivo</p>
        </div>

        <!-- Slug -->
        <div class="bg-white rounded-lg shadow p-6">
          <label class="block text-sm font-semibold text-gray-900 mb-2">
            URL Amigable (Slug)
          </label>
          <div class="flex items-center gap-2">
            <span class="text-gray-600">periodent.com.ve/blog/</span>
            <input
              v-model="form.slug"
              type="text"
              class="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="slug-post"
            />
          </div>
          <p class="text-sm text-gray-500 mt-2">Solo caracteres alfanuméricos y guiones</p>
        </div>

        <!-- Resumen/Excerpt -->
        <div class="bg-white rounded-lg shadow p-6">
          <label class="block text-sm font-semibold text-gray-900 mb-2">
            Resumen Breve
          </label>
          <textarea
            v-model="form.excerpt"
            rows="3"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Resumen de 1-2 líneas"
          ></textarea>
          <div class="flex justify-between items-center mt-2">
            <p class="text-sm text-gray-500">Aparecerá en listados</p>
            <span class="text-xs text-gray-400">{{ form.excerpt.length }} caracteres</span>
          </div>
        </div>

        <!-- Contenido Principal -->
        <!-- Contenido Principal -->
        <div class="bg-white rounded-lg shadow p-6 space-y-4">
          <div>
            <label class="block text-sm font-semibold text-gray-900 mb-2">
              Contenido del Post *
            </label>
            <p class="text-xs text-gray-500 mb-3">
              Editor profesional con opciones de formato completo (tipo Word)
            </p>
          </div>

          <!-- Toggle Modos -->
          <div class="flex gap-2 flex-wrap">
            <button
              type="button"
              :class="['px-4 py-2 text-sm rounded-lg border transition font-medium', editorMode === 'visual' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400']"
              @click="editorMode = 'visual'"
            >
              📝 Editor Visual
            </button>
            <button
              type="button"
              :class="['px-4 py-2 text-sm rounded-lg border transition font-medium', editorMode === 'html' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400']"
              @click="editorMode = 'html'"
            >
              &lt;/&gt; HTML
            </button>
            <button
              type="button"
              class="px-4 py-2 text-sm rounded-lg border border-green-500 text-green-700 bg-green-50 hover:bg-green-100 transition font-medium"
              @click="pastePlainText"
            >
              📋 Pegar sin formato
            </button>
          </div>

          <!-- Editor Visual -->
          <ClientOnly fallback="Cargando editor...">
            <div v-show="editorMode === 'visual'" class="space-y-2">
              <QuillEditor
                ref="quillEditor"
                v-model="form.content"
                placeholder="Escribe tu contenido aquí... Usa las opciones de formato superior para personalizar el texto"
                min-height="400px"
                theme="snow"
              />
              <div class="flex justify-between items-center">
                <p class="text-xs text-gray-500">
                  💡 Usa el toolbar superior para formato. Ctrl+Z para deshacer, Ctrl+Y para rehacer.
                </p>
                <span class="text-xs text-gray-400">{{ form.content.length }} caracteres</span>
              </div>
            </div>
          </ClientOnly>

          <!-- Editor HTML -->
          <div v-show="editorMode === 'html'" class="space-y-2">
            <textarea
              v-model="form.content"
              rows="14"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm bg-gray-50"
              placeholder="Edita el HTML directamente aquí. Ej: &lt;h2&gt;Título&lt;/h2&gt;&lt;p&gt;Párrafo&lt;/p&gt;"
            ></textarea>
            <div class="flex justify-between items-center">
              <p class="text-xs text-gray-500">
                Edita etiquetas HTML: &lt;h2&gt;, &lt;strong&gt;, &lt;ul&gt;, &lt;li&gt;, &lt;p&gt;, &lt;br&gt;
              </p>
              <span class="text-xs text-gray-400">{{ form.content.length }} caracteres</span>
            </div>
          </div>

          <!-- Error Message -->
          <p v-if="quillError" class="text-sm text-red-600 bg-red-50 px-3 py-2 rounded">{{ quillError }}</p>
        </div>

        <!-- Featured Image -->
        <div class="bg-white rounded-lg shadow p-6">
          <label class="block text-sm font-semibold text-gray-900 mb-2">
            Imagen Destacada
          </label>
          <input
            v-model="form.featured_image"
            type="url"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="https://ejemplo.com/imagen.jpg"
          />
          <p class="text-sm text-gray-500 mt-2">URL completa de la imagen</p>
          <div v-if="form.featured_image" class="mt-4">
            <img 
              :src="form.featured_image" 
              :alt="form.title"
              class="w-full max-h-64 object-cover rounded-lg"
              @error="form.featured_image = ''"
            />
          </div>
        </div>

        <!-- Estado -->
        <div class="bg-white rounded-lg shadow p-6">
          <label class="block text-sm font-semibold text-gray-900 mb-3">
            Estado de Publicación
          </label>
          <div class="space-y-3">
            <label class="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50" 
                   :class="{ 'border-blue-500 bg-blue-50': form.status === 'draft' }">
              <input 
                type="radio" 
                value="draft" 
                v-model="form.status"
                class="w-4 h-4"
              />
              <span class="ml-3">
                <span class="block font-medium text-gray-900">Borrador</span>
                <span class="block text-sm text-gray-500">No visible para público</span>
              </span>
            </label>
            <label class="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                   :class="{ 'border-green-500 bg-green-50': form.status === 'published' }">
              <input 
                type="radio" 
                value="published" 
                v-model="form.status"
                class="w-4 h-4"
              />
              <span class="ml-3">
                <span class="block font-medium text-gray-900">Publicado</span>
                <span class="block text-sm text-gray-500">Visible públicamente</span>
              </span>
            </label>
          </div>
        </div>

        <!-- Buttons -->
        <div class="bg-white rounded-lg shadow p-6 flex gap-3 justify-between">
          <NuxtLink 
            to="/admin/posts"
            class="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-medium transition"
          >
            Cancelar
          </NuxtLink>
          <div class="flex gap-3">
            <button
              v-if="isEditing"
              type="button"
              @click="deletePostNow"
              :disabled="isLoading"
              class="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium transition disabled:opacity-50"
            >
              🗑️ Eliminar
            </button>
            <button
              type="submit"
              :disabled="isLoading"
              class="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition disabled:opacity-50 flex items-center gap-2"
            >
              <span v-if="isLoading">⏳</span>
              <span v-else>✓</span>
              {{ isLoading ? 'Guardando...' : isEditing ? 'Guardar Cambios' : 'Crear Post' }}
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
            <!-- Title Preview -->
            <div class="text-sm">
              <span class="text-gray-600 text-xs uppercase font-semibold">Título</span>
              <p class="text-gray-900 font-semibold mt-1">{{ form.title || 'Tu título' }}</p>
            </div>

            <!-- Slug Preview -->
            <div class="border-t pt-3 text-sm">
              <span class="text-gray-600 text-xs uppercase font-semibold">URL</span>
              <p class="text-blue-600 text-xs mt-1 break-all">periodent.com.ve/blog/{{ form.slug }}</p>
            </div>

            <!-- Excerpt Preview -->
            <div class="border-t pt-3 text-sm">
              <span class="text-gray-600 text-xs uppercase font-semibold">Resumen</span>
              <p class="text-gray-600 text-xs mt-1">{{ form.excerpt || 'Resumen breve' }}</p>
            </div>

            <!-- Status Badge -->
            <div class="border-t pt-3">
              <span 
                class="inline-block px-3 py-1 rounded-full text-xs font-medium"
                :class="form.status === 'published' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'"
              >
                {{ form.status === 'published' ? '🟢 Publicado' : '🟡 Borrador' }}
              </span>
            </div>

            <!-- Created At -->
            <div v-if="isEditing" class="border-t pt-3 text-xs text-gray-600">
              <p>Creado: {{ formatDate(form.createdAt) }}</p>
              <p>Actualizado: {{ formatDate(form.updatedAt) }}</p>
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
const { getPost, updatePost, deletePost: deletePostApi, createPost } = useAdminApi();
const { isAuthenticated } = useAdminAuth();

const quillEditor = ref();
const editorMode = ref<'visual' | 'html'>('visual');

const postId = parseInt(route.params.id as string) || null;
const isEditing = !!postId && postId > 0;

const form = reactive({
  id: null,
  title: '',
  slug: '',
  excerpt: '',
  content: '',
  featured_image: '',
  status: 'draft',
  createdAt: '',
  updatedAt: '',
  publishedAt: '',
  category: null,
  tags: [],
  author: null
});

const isLoading = ref(false);
const isLoadingPost = ref(false);
const error = ref<string | null>(null);
const quillError = ref<string | null>(null);

const generateSlugFromTitle = () => {
  if (!form.slug || form.slug.startsWith('post-')) {
    form.slug = form.title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
};

const pastePlainText = async () => {
  quillError.value = null;
  try {
    const text = await navigator.clipboard?.readText();
    if (!text) return;

    const escaped = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    const paragraphs = escaped
      .split(/\r?\n/)
      .map(line => line.trim() ? `<p>${line}</p>` : '<br>')
      .join('');

    form.content = paragraphs;
  } catch (err: any) {
    quillError.value = 'No pudimos leer el portapapeles. Usa Ctrl+Shift+V para pegar sin formato.';
  }
};

const formatDate = (date: string) => {
  if (!date) return '-';
  return new Date(date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

const loadPost = async () => {
  if (!isEditing) return;
  
  isLoadingPost.value = true;
  try {
    const postData = await getPost(postId!);
    // Mapear campos del backend al formulario
    form.id = postData.id;
    form.title = postData.title || '';
    form.slug = postData.slug || '';
    form.excerpt = postData.excerpt || '';
    form.content = postData.content || '';
    form.featured_image = postData.featured_image || '';
    form.status = postData.status || 'draft';
    form.createdAt = postData.createdAt || '';
    form.updatedAt = postData.updatedAt || '';
    form.publishedAt = postData.publishedAt || '';
    form.category = postData.category || null;
    form.tags = postData.tags || [];
    form.author = postData.author || null;
  } catch (err: any) {
    error.value = 'No se pudo cargar el post: ' + err.message;
  } finally {
    isLoadingPost.value = false;
  }
};

const handleSubmit = async () => {
  isLoading.value = true;
  error.value = null;

  try {
    if (!form.title.trim()) {
      error.value = 'El título es requerido';
      isLoading.value = false;
      return;
    }

    if (!form.content.trim()) {
      error.value = 'El contenido es requerido';
      isLoading.value = false;
      return;
    }

    if (!form.slug) {
      form.slug = `post-${Date.now().toString().slice(-6)}`;
    }

    const data = {
      ...(isEditing && { id: postId }),
      title: form.title.trim(),
      slug: form.slug.trim(),
      excerpt: form.excerpt.trim(),
      content: form.content.trim(),
      featured_image: form.featured_image ? form.featured_image.trim() : undefined,
      status: form.status,
      category: form.category,
      tags: form.tags,
      author: form.author
    };

    if (isEditing) {
      await updatePost(data);
    } else {
      await createPost(data);
    }

    await router.push('/admin/posts');
  } catch (err: any) {
    error.value = err.message || 'Error al guardar el post';
  } finally {
    isLoading.value = false;
  }
};

const deletePostNow = async () => {
  if (!confirm('¿Estás seguro de que quieres eliminar este post?')) {
    return;
  }

  isLoading.value = true;
  error.value = null;

  try {
    await deletePostApi(postId!);
    await router.push('/admin/posts');
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
    loadPost();
  }
});
</script>

 
