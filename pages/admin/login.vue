<template>
  <div class="login-page">
    <div class="login-card">
      <!-- Brand -->
      <div class="brand">
        <div class="brand-icon">🦷</div>
        <h1>Periodent Admin</h1>
        <p>Panel de administración</p>
      </div>

      <form @submit.prevent="handleLogin" class="form">
        <!-- Email -->
        <div class="form-group">
          <label>Correo electrónico</label>
          <div class="input-wrap">
            <span class="input-icon">📧</span>
            <input v-model="form.email" type="email" required placeholder="admin@periodent.com.ve" />
          </div>
        </div>

        <!-- Password -->
        <div class="form-group">
          <label>Contraseña</label>
          <div class="input-wrap">
            <span class="input-icon">🔒</span>
            <input v-model="form.password" type="password" required placeholder="••••••••" />
          </div>
        </div>

        <!-- Error -->
        <div v-if="error" class="alert-error">⚠️ {{ error }}</div>

        <!-- Submit -->
        <button class="btn-primary" type="submit" :disabled="isLoading">
          {{ isLoading ? 'Iniciando sesión…' : 'Ingresar' }}
        </button>
      </form>

      <p class="copyright">© 2026 Periodent</p>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false
});

const router = useRouter();
const { login, isLoading, error, isAuthenticated, initAuth } = useAdminAuth();

const form = reactive({
  email: '',
  password: ''
});

const handleLogin = async () => {
  try {
    await login(form.email, form.password);
    await router.push('/admin/posts');
  } catch (err) {
    // El error ya está en el state de useAdminAuth
  }
};

// Restaurar sesión al cargar
onMounted(() => {
  initAuth();
  // Si ya está autenticado, redirigir al admin
  if (isAuthenticated.value) {
    router.push('/admin/posts');
  }
});

// Si ya está autenticado, redirigir
watch(isAuthenticated, (authenticated) => {
  if (authenticated) {
    router.push('/admin/posts');
  }
});
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: linear-gradient(135deg, var(--accent-color) 0%, var(--primary-color) 60%, var(--secondary-color) 100%);
}

.login-card {
  width: 100%;
  max-width: 440px;
  background: var(--white);
  border-radius: 16px;
  box-shadow: var(--box-shadow);
  padding: 28px;
}

.brand {
  text-align: center;
  margin-bottom: 20px;
}

.brand-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 12px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  color: #fff;
  font-size: 28px;
  box-shadow: 0 8px 20px rgba(0,0,0,.12);
}

.brand h1 {
  font-size: 24px;
  color: var(--text-color);
  margin-bottom: 4px;
}

.brand p {
  font-size: 14px;
  color: var(--dark-gray);
}

.form { display: grid; gap: 16px; margin-top: 10px; }
.form-group label { display:block; font-size: 14px; color: var(--text-color); margin-bottom: 6px; font-weight: 600; }
.input-wrap { position: relative; }
.input-icon { position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: var(--dark-gray); font-size: 18px; }
.input-wrap input {
  width: 100%;
  padding: 12px 12px 12px 40px;
  border: 2px solid var(--light-gray);
  border-radius: 10px;
  outline: none;
  font-size: 15px;
  transition: border-color .2s ease;
}
.input-wrap input:focus { border-color: var(--primary-color); }

.alert-error {
  background: #ffe9ea;
  color: #b4001e;
  border: 1px solid #ffc3c8;
  border-radius: 10px;
  padding: 10px 12px;
  font-size: 14px;
}

.btn-primary {
  width: 100%;
  padding: 12px 16px;
  background: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
}
.btn-primary:hover { background: var(--secondary-color); }
.btn-primary:disabled { opacity: .7; cursor: not-allowed; }

.copyright {
  text-align: center;
  margin-top: 18px;
  color: var(--dark-gray);
  font-size: 12px;
}
</style>
