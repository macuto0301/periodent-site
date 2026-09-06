/**
 * Plugin para inicializar la autenticación
 * Se ejecuta al cargar la app
 */

export default defineNuxtPlugin(() => {
  const { initAuth } = useAdminAuth();
  
  if (process.client) {
    initAuth();
  }
});
