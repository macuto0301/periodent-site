<template>
  <div class="space-y-6">
    <!-- Header Moderno -->
    <div class="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-xl p-8 text-white">
      <NuxtLink 
        to="/admin/posts"
        class="inline-flex items-center gap-2 text-white/90 hover:text-white mb-4 font-medium transition-colors"
      >
        <span>←</span>
        <span>Volver a Posts</span>
      </NuxtLink>
      <div class="flex items-center gap-4">
        <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl">
          ✨
        </div>
        <div>
          <h1 class="text-4xl font-bold mb-1">Crear Nuevo Post</h1>
          <p class="text-purple-100">Comparte tu contenido con el mundo</p>
        </div>
      </div>
    </div>

    <!-- Main Form Container -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Form -->
      <form @submit.prevent="handleSubmit" class="lg:col-span-2 space-y-6">
        
        <!-- Error Alert -->
        <div v-if="error" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-start gap-3">
          <div class="text-xl">⚠️</div>
          <div>
            <h3 class="font-medium">Error al crear post</h3>
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
          <p class="text-sm text-gray-500 mt-2">Sé claro y descriptivo para que los lectores sepan de qué trata</p>
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
              placeholder="guia-cuidado-dental"
            />
          </div>
          <p class="text-sm text-gray-500 mt-2">Se genera automáticamente. Solo caracteres alfanuméricos y guiones</p>
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
            placeholder="Resumen de 1-2 líneas que aparecerá en listados"
          ></textarea>
          <div class="flex justify-between items-center mt-2">
            <p class="text-sm text-gray-500">Ayuda a los lectores a decidir si leer el post completo</p>
            <span class="text-xs text-gray-400">{{ form.excerpt.length }} caracteres</span>
          </div>
        </div>

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
            placeholder="https://ejemplo.com/imagen-destacada.jpg"
          />
          <p class="text-sm text-gray-500 mt-2">URL completa de la imagen (JPG, PNG, WebP)</p>
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
                <span class="block text-sm text-gray-500">Guardado localmente, no visible para público</span>
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
                <span class="block text-sm text-gray-500">Visible en el blog públicamente</span>
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
          <button
            type="submit"
            :disabled="isLoading"
            class="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <span v-if="isLoading">⏳</span>
            <span v-else>✓</span>
            {{ isLoading ? 'Guardando...' : 'Publicar Post' }}
          </button>
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
              <span class="text-gray-600 text-xs uppercase font-semibold">Título en listado</span>
              <p class="text-gray-900 font-semibold mt-1 line-clamp-2">{{ form.title || 'Tu título aquí' }}</p>
            </div>

            <!-- Slug Preview -->
            <div class="border-t pt-3 text-sm">
              <span class="text-gray-600 text-xs uppercase font-semibold">URL del post</span>
              <p class="text-blue-600 text-xs mt-1 break-all">periodent.com.ve/blog/{{ form.slug || 'slug-del-post' }}</p>
            </div>

            <!-- Excerpt Preview -->
            <div class="border-t pt-3 text-sm">
              <span class="text-gray-600 text-xs uppercase font-semibold">Resumen en buscador</span>
              <p class="text-gray-600 text-xs mt-1 line-clamp-3">{{ form.excerpt || 'El resumen breve aparecerá aquí' }}</p>
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
          </div>
        </div>

        <!-- Tips Card -->
        <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 class="text-sm font-semibold text-blue-900 mb-2">💡 Consejos</h4>
          <ul class="text-xs text-blue-800 space-y-1">
            <li>• Usa títulos claros y descriptivos</li>
            <li>• El slug es importante para SEO</li>
            <li>• Escribe un buen resumen</li>
            <li>• Usa imágenes relevantes</li>
            <li>• Guarda como borrador antes de publicar</li>
          </ul>
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

const router = useRouter();
const { createPost } = useAdminApi();
const { isAuthenticated } = useAdminAuth();

const quillEditor = ref();
const editorMode = ref<'visual' | 'html'>('visual');

const form = reactive({
  title: '',
  slug: '',
  excerpt: '',
  content: '',
  featured_image: '',
  status: 'draft'
});

const isLoading = ref(false);
const error = ref<string | null>(null);
const quillError = ref<string | null>(null);

// Generar slug del título
const generateSlugFromTitle = () => {
  if (!form.slug) {
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

// Enviar formulario
const handleSubmit = async () => {
  isLoading.value = true;
  error.value = null;

  try {
    // Validar campos requeridos
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

    // Asegurar que haya slug
    if (!form.slug) {
      form.slug = `post-${Date.now().toString().slice(-6)}`;
    }

    const data = {
      title: form.title.trim(),
      slug: form.slug.trim(),
      excerpt: form.excerpt.trim(),
      content: form.content.trim(),
      featured_image: form.featured_image.trim(),
      status: form.status
    };

    await createPost(data);
    await router.push('/admin/posts');
  } catch (err: any) {
    error.value = err.message || 'Error al crear el post. Por favor intenta de nuevo.';
  } finally {
    isLoading.value = false;
  }
};

// Proteger página
onMounted(() => {
  if (!isAuthenticated.value) {
    navigateTo('/admin/login');
  }
});
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
