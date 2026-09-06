/**
 * Middleware para proteger rutas del admin
 * Redirige a login si no está autenticado
 */

export default defineNuxtRouteMiddleware((to) => {
  // Solo aplicar a rutas del admin (excepto login)
  if (to.path.startsWith('/admin') && to.path !== '/admin/login') {
    const { token, initAuth } = useAdminAuth();
    
    // Restaurar token desde localStorage antes de validar
    initAuth();
    
    if (!token.value) {
      return navigateTo('/admin/login');
    }
  }
});
