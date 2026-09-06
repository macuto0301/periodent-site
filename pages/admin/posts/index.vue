<template>
  <div class="space-y-6">
    <!-- Header con gradiente -->
    <div class="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white">
      <div class="flex justify-between items-center">
        <div>
          <h1 class="text-4xl font-bold mb-2">📝 Gestión de Posts</h1>
          <p class="text-blue-100">Administra todo el contenido de tu blog</p>
        </div>
        <NuxtLink 
          to="/admin/posts/new"
          class="bg-white text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
        >
          <span class="text-xl">+</span> 
          <span>Nuevo Post</span>
        </NuxtLink>
      </div>
      
      <!-- Stats Cards -->
      <div class="grid grid-cols-3 gap-4 mt-6">
        <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
          <div class="text-2xl mb-1">{{ posts.length }}</div>
          <div class="text-sm text-blue-100">Posts totales</div>
        </div>
        <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
          <div class="text-2xl mb-1">{{ posts.filter(p => p.status === 'published').length }}</div>
          <div class="text-sm text-blue-100">Publicados</div>
        </div>
        <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
          <div class="text-2xl mb-1">{{ posts.filter(p => p.status === 'draft').length }}</div>
          <div class="text-sm text-blue-100">Borradores</div>
        </div>
      </div>
    </div>

    <!-- Loading -->
    <div v-if="isLoading" class="text-center py-16">
      <div class="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-blue-600"></div>
      <p class="text-gray-600 mt-4 font-medium">Cargando posts...</p>
    </div>

    <!-- Error -->
    <div v-else-if="error" class="bg-red-50 border-2 border-red-200 text-red-700 px-6 py-4 rounded-xl flex items-center gap-3">
      <span class="text-2xl">⚠️</span>
      <div>
        <div class="font-semibold">Error al cargar posts</div>
        <div class="text-sm">{{ error }}</div>
      </div>
    </div>

    <!-- Posts Grid -->
    <div v-else class="grid gap-4">
      <div 
        v-for="post in posts" 
        :key="post.id" 
        class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-200 overflow-hidden border border-gray-100 hover:border-blue-200 group"
      >
        <div class="p-6">
          <div class="flex items-start justify-between">
            <!-- Post Info -->
            <div class="flex-1 min-w-0 pr-4">
              <div class="flex items-center gap-3 mb-2">
                <h3 class="text-lg font-bold text-gray-900 truncate group-hover:text-blue-600 transition-colors">
                  {{ post.title }}
                </h3>
                <span 
                  :class="[
                    'px-3 py-1 rounded-full text-xs font-semibold flex-shrink-0',
                    post.status === 'published' 
                      ? 'bg-green-100 text-green-700 border border-green-200' 
                      : 'bg-yellow-100 text-yellow-700 border border-yellow-200'
                  ]"
                >
                  {{ post.status === 'published' ? '🟢 Publicado' : '🟡 Borrador' }}
                </span>
              </div>
              
              <p class="text-sm text-gray-600 mb-3 line-clamp-2">
                {{ post.excerpt || 'Sin descripción' }}
              </p>
              
              <div class="flex items-center gap-4 text-xs text-gray-500">
                <div class="flex items-center gap-1">
                  <span>🔗</span>
                  <span class="font-mono">{{ post.slug }}</span>
                </div>
                <div class="flex items-center gap-1">
                  <span>📅</span>
                  <span>{{ formatDate(post.created_at) }}</span>
                </div>
              </div>
            </div>

            <!-- Actions -->
            <div class="flex flex-col gap-2 flex-shrink-0">
              <NuxtLink 
                :to="`/admin/posts/${post.id}`"
                class="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <span>✏️</span>
                <span>Editar</span>
              </NuxtLink>
              <button 
                @click="deletePost(post.id)"
                class="px-4 py-2 bg-red-50 text-red-600 text-sm font-medium rounded-lg hover:bg-red-100 transition-colors flex items-center gap-2 border border-red-200"
              >
                <span>🗑️</span>
                <span>Eliminar</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="posts.length === 0" class="text-center py-16 bg-white rounded-xl shadow-md">
        <div class="text-6xl mb-4">📝</div>
        <h3 class="text-xl font-bold text-gray-900 mb-2">No hay posts todavía</h3>
        <p class="text-gray-600 mb-6">Comienza creando tu primer post</p>
        <NuxtLink 
          to="/admin/posts/new"
          class="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 font-semibold"
        >
          <span>+</span>
          <span>Crear Primer Post</span>
        </NuxtLink>
      </div>
    </div>

    <!-- Pagination -->
    <div v-if="pagination && pagination.pages > 1" class="flex justify-center gap-2">
      <button
        v-for="page in pagination.pages"
        :key="page"
        @click="currentPage = page"
        :class="[
          'px-3 py-2 rounded',
          currentPage === page
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        ]"
      >
        {{ page }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin',
  middleware: 'admin'
});

const { getPosts, deletePost: deletePostApi } = useAdminApi();
const { isAuthenticated } = useAdminAuth();

interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  status: 'draft' | 'published';
  created_at: string;
}

interface Pagination {
  page: number;
  pages: number;
  total: number;
}

const posts = ref<Post[]>([]);
const pagination = ref<Pagination | null>(null);
const isLoading = ref(false);
const error = ref<string | null>(null);
const currentPage = ref(1);

// Cargar posts
const loadPosts = async () => {
  isLoading.value = true;
  error.value = null;
  try {
    const data = await getPosts(currentPage.value);
    posts.value = data.posts;
    pagination.value = {
      page: data.page,
      pages: Math.ceil(data.total / data.pageSize),
      total: data.total
    };
  } catch (err: any) {
    error.value = err.message;
  } finally {
    isLoading.value = false;
  }
};

// Eliminar post
const deletePost = async (id: number) => {
  if (!confirm('¿Eliminar este post?')) return;
  
  try {
    await deletePostApi(id);
    await loadPosts();
  } catch (err: any) {
    error.value = err.message;
  }
};

// Helper
const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('es-ES');
};

// Proteger
onMounted(() => {
  if (!isAuthenticated.value) {
    navigateTo('/admin/login');
  }
  loadPosts();
});

// Recargar cuando cambia la página
watch(currentPage, () => loadPosts());
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
