/**
 * Composable para manejar autenticación del admin
 * Maneja login, logout, y persistencia de token
 */

export const useAdminAuth = () => {
  const token = useState<string | null>('adminToken', () => null);
  const user = useState<any>('adminUser', () => null);
  const isLoading = useState('authLoading', () => false);
  const error = useState<string | null>('authError', () => null);

  // Cargar token del localStorage en el cliente
  const initAuth = () => {
    if (process.client) {
      const savedToken = localStorage.getItem('adminToken');
      const savedUser = localStorage.getItem('adminUser');
      if (savedToken) {
        token.value = savedToken;
        user.value = savedUser ? JSON.parse(savedUser) : null;
      }
    }
  };

  // Login
  const login = async (email: string, password: string) => {
    isLoading.value = true;
    error.value = null;

    try {
      const config = useRuntimeConfig();
      let apiUrl = config.public.apiUrl || 'https://periodent.com.ve/api';
      // Normalizar para evitar doble slash
      apiUrl = apiUrl.replace(/\/+$/, '');
      const endpoint = '/auth/login';
      const response = await fetch(`${apiUrl}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      token.value = data.token;
      user.value = data.user;

      // Guardar en localStorage
      if (process.client) {
        localStorage.setItem('adminToken', data.token);
        localStorage.setItem('adminUser', JSON.stringify(data.user));
      }

      return data;
    } catch (err: any) {
      error.value = err.message;
      throw err;
    } finally {
      isLoading.value = false;
    }
  };

  // Logout
  const logout = () => {
    token.value = null;
    user.value = null;
    if (process.client) {
      localStorage.removeItem('adminToken');
      localStorage.removeItem('adminUser');
    }
  };

  // Verificar si está autenticado
  const isAuthenticated = computed(() => !!token.value);

  return {
    token,
    user,
    isLoading,
    error,
    isAuthenticated,
    login,
    logout,
    initAuth
  };
};
