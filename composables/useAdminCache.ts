/**
 * Composable para manejar invalidación de datos en admin
 * Permite que los cambios se reflejen en tiempo real
 */

// Key para almacenar versiones de datos
const CACHE_KEYS = {
  POSTS: 'posts_version',
  CATEGORIES: 'categories_version',
  TAGS: 'tags_version'
};

export const useAdminCache = () => {
  // Incrementar versión fuerza recarga desde API
  const invalidatePosts = () => {
    const current = sessionStorage.getItem(CACHE_KEYS.POSTS) || '0';
    sessionStorage.setItem(CACHE_KEYS.POSTS, (parseInt(current) + 1).toString());
  };

  const invalidateCategories = () => {
    const current = sessionStorage.getItem(CACHE_KEYS.CATEGORIES) || '0';
    sessionStorage.setItem(CACHE_KEYS.CATEGORIES, (parseInt(current) + 1).toString());
  };

  const invalidateTags = () => {
    const current = sessionStorage.getItem(CACHE_KEYS.TAGS) || '0';
    sessionStorage.setItem(CACHE_KEYS.TAGS, (parseInt(current) + 1).toString());
  };

  const invalidateAll = () => {
    invalidatePosts();
    invalidateCategories();
    invalidateTags();
  };

  // Obtener versión actual (para usar en keys)
  const getPostsVersion = () => sessionStorage.getItem(CACHE_KEYS.POSTS) || '0';
  const getCategoriesVersion = () => sessionStorage.getItem(CACHE_KEYS.CATEGORIES) || '0';
  const getTagsVersion = () => sessionStorage.getItem(CACHE_KEYS.TAGS) || '0';

  return {
    invalidatePosts,
    invalidateCategories,
    invalidateTags,
    invalidateAll,
    getPostsVersion,
    getCategoriesVersion,
    getTagsVersion
  };
};
