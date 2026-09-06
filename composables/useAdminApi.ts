/**
 * Composable para llamadas a la API del admin
 * Incluye autenticación automática con JWT
 */

export const useAdminApi = () => {
  const { token } = useAdminAuth();

  const request = async (url: string, options: any = {}) => {
    // Obtener API_BASE en cada request para asegurar que use el valor correcto
    const config = useRuntimeConfig();
    let API_BASE = config.public.apiUrl;
    // Normalizar para evitar doble slash
    API_BASE = API_BASE.replace(/\/+$/, '');

    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Cache-Control': 'no-cache, no-store, must-revalidate, max-age=0',
      'Pragma': 'no-cache',
      'Expires': '0',
      ...options.headers
    };

    // Agregar token de autenticación
    if (token.value) {
      headers['Authorization'] = `Bearer ${token.value}`;
    }

    // Para GET requests, agregar timestamp para evitar cache
    let finalUrl = url;
    if (!options.method || options.method === 'GET') {
      const separator = url.includes('?') ? '&' : '?';
      finalUrl = `${url}${separator}_t=${Date.now()}`;
    }

    // Normalizar slashes en la URL final
    let fullUrl = `${API_BASE}${finalUrl.startsWith('/') ? '' : '/'}${finalUrl}`;

    try {
      const response = await fetch(fullUrl, {
        ...options,
        headers,
        cache: 'no-store', // Asegurar que fetch no cachea
        credentials: 'include' // Incluir cookies/credentials
      });

      // Verificar si la respuesta es JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error(`Invalid content type: ${contentType}. Response: ${await response.text()}`);
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || data.error || `HTTP ${response.status}: ${response.statusText}`);
      }

      return data;
    } catch (error: any) {
      console.error('API Error:', {
        url: fullUrl,
        method: options.method || 'GET',
        error: error.message
      });
      throw error;
    }
  };

  // Posts
  const getPosts = (page = 1) => 
    request(`/posts?page=${page}`);

  const getPost = (id: number) => 
    request(`/posts/${id}`);

  const createPost = (post: any) => 
    request('/posts', {
      method: 'POST',
      body: JSON.stringify(post)
    });

  const updatePost = (post: any) => 
    request('/posts', {
      method: 'PUT',
      body: JSON.stringify(post)
    });

  const deletePost = (id: number) => 
    request('/posts', {
      method: 'DELETE',
      body: JSON.stringify({ id })
    });

  // Categories
  const getCategories = (page = 1) => 
    request(`/categories?page=${page}`);

  const getCategory = (id: number) => 
    request(`/categories/${id}`);

  const createCategory = (category: any) => 
    request('/categories', {
      method: 'POST',
      body: JSON.stringify(category)
    });

  const updateCategory = (category: any) => 
    request(`/categories/${category.id}`, {
      method: 'PUT',
      body: JSON.stringify(category)
    });

  const deleteCategory = (id: number) => 
    request(`/categories/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({ id })
    });

  // Tags
  const getTags = (page = 1) => 
    request(`/tags?page=${page}`);

  const getTag = (id: number) => 
    request(`/tags/${id}`);

  const createTag = (tag: any) => 
    request('/tags', {
      method: 'POST',
      body: JSON.stringify(tag)
    });

  const updateTag = (tag: any) => 
    request(`/tags/${tag.id}`, {
      method: 'PUT',
      body: JSON.stringify(tag)
    });

  const deleteTag = (id: number) => 
    request(`/tags/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({ id })
    });

  return {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost,
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory,
    getTags,
    getTag,
    createTag,
    updateTag,
    deleteTag
  };
};
