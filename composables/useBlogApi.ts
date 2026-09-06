/**
 * Composable: useBlogApi
 * 
 * Consumo de la API de blog desde Nuxt 3
 * 
 * Uso:
 * const { getPosts, getPost, searchPosts } = useBlogApi()
 */

export const useBlogApi = () => {
  const apiBase = process.env.NUXT_PUBLIC_API_URL || 'https://periodent.com/api'

  // Get all published posts with pagination
  const getPosts = async (page = 1, limit = 10) => {
    try {
      const response = await fetch(
        `${apiBase}/posts?page=${page}&limit=${limit}`,
        { headers: { 'Accept': 'application/json' } }
      )
      
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      return await response.json()
    } catch (error) {
      console.error('Error fetching posts:', error)
      return { success: false, error: error.message }
    }
  }

  // Get single post by slug
  const getPost = async (slug) => {
    try {
      const response = await fetch(
        `${apiBase}/posts/${slug}`,
        { headers: { 'Accept': 'application/json' } }
      )
      
      if (!response.ok) {
        if (response.status === 404) {
          return { success: false, error: 'Post no encontrado' }
        }
        throw new Error(`HTTP ${response.status}`)
      }
      
      return await response.json()
    } catch (error) {
      console.error('Error fetching post:', error)
      return { success: false, error: error.message }
    }
  }

  // Search posts
  const searchPosts = async (query, limit = 10) => {
    if (query.length < 3) {
      return { success: false, error: 'Búsqueda debe tener al menos 3 caracteres' }
    }

    try {
      const response = await fetch(
        `${apiBase}/search?q=${encodeURIComponent(query)}&limit=${limit}`,
        { headers: { 'Accept': 'application/json' } }
      )
      
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      return await response.json()
    } catch (error) {
      console.error('Error searching posts:', error)
      return { success: false, error: error.message }
    }
  }

  // Get posts by category
  const getPostsByCategory = async (categorySlug, page = 1, limit = 10) => {
    try {
      const response = await fetch(
        `${apiBase}/categories/${categorySlug}?page=${page}&limit=${limit}`,
        { headers: { 'Accept': 'application/json' } }
      )
      
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      return await response.json()
    } catch (error) {
      console.error('Error fetching category:', error)
      return { success: false, error: error.message }
    }
  }

  // Get all categories
  const getCategories = async () => {
    try {
      const response = await fetch(
        `${apiBase}/categories`,
        { headers: { 'Accept': 'application/json' } }
      )
      
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      return await response.json()
    } catch (error) {
      console.error('Error fetching categories:', error)
      return { success: false, error: error.message }
    }
  }

  // Get all tags
  const getTags = async () => {
    try {
      const response = await fetch(
        `${apiBase}/tags`,
        { headers: { 'Accept': 'application/json' } }
      )
      
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      return await response.json()
    } catch (error) {
      console.error('Error fetching tags:', error)
      return { success: false, error: error.message }
    }
  }

  return {
    getPosts,
    getPost,
    searchPosts,
    getPostsByCategory,
    getCategories,
    getTags
  }
}
