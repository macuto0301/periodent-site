<template>
  <div class="admin-layout">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="brand">
        <div class="brand-icon">🦷</div>
        <div class="brand-text">
          <div class="brand-title">Periodent</div>
          <p>Admin CMS</p>
        </div>
      </div>

      <nav class="menu">
        <NuxtLink to="/admin/posts" class="menu-item" active-class="active">
          <span>📝</span>
          <span>Posts</span>
        </NuxtLink>
        <NuxtLink to="/admin/categories" class="menu-item" active-class="active">
          <span>📁</span>
          <span>Categorías</span>
        </NuxtLink>
        <NuxtLink to="/admin/tags" class="menu-item" active-class="active">
          <span>🏷️</span>
          <span>Tags</span>
        </NuxtLink>
      </nav>

      <div class="logout">
        <button @click="logout" class="btn-logout">🚪 Cerrar sesión</button>
      </div>
    </aside>

    <!-- Main -->
    <div class="content">
      <header class="topbar">
        <div class="page-title">{{ getCurrentPageTitle() }}</div>
        <div class="user">👤 Administrador</div>
      </header>

      <main class="main">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
const { logout } = useAdminAuth();
const route = useRoute();

const getCurrentPageTitle = () => {
  const path = route.path;
  if (path.includes('/posts/new')) return '✨ Crear Nuevo Post';
  if (path.includes('/posts/')) return '✏️ Editar Post';
  if (path.includes('/posts')) return '📝 Gestión de Posts';
  if (path.includes('/categories')) return '📁 Categorías';
  if (path.includes('/tags')) return '🏷️ Tags';
  return 'Dashboard';
};
</script>

<style scoped>
.admin-layout { min-height: 100vh; background: var(--light-bg); }
.sidebar {
  position: fixed; left: 0; top: 0; height: 100vh; width: 250px;
  background: var(--white); box-shadow: var(--box-shadow); padding: 20px; display: flex; flex-direction: column;
}
.brand { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; }
.brand-icon { width: 44px; height: 44px; border-radius: 10px; display:flex;align-items:center;justify-content:center; color:#fff; background: linear-gradient(135deg, var(--primary-color), var(--accent-color)); }
.brand-title { margin: 0; font-size: 18px; color: var(--accent-color); font-weight: 700; }
.brand-text p { margin: 0; font-size: 12px; color: var(--dark-gray); }

.menu { display: grid; gap: 8px; }
.menu-item { display:flex; align-items:center; gap: 10px; padding: 10px 12px; border-radius: 10px; color: var(--text-color); text-decoration: none; }
.menu-item:hover { background: var(--light-bg); }
.menu-item.active { background: rgba(19,6,99,0.08); color: var(--accent-color); font-weight: 600; }

.logout { margin-top: auto; padding-top: 12px; border-top: 1px solid var(--light-gray); }
.btn-logout { width: 100%; padding: 10px 12px; border-radius: 10px; border: 1px solid #ffd1d6; background: #fff5f6; color: #b4001e; cursor: pointer; }
.btn-logout:hover { background: #ffe9ea; }

.content { margin-left: 250px; min-height: 100vh; display:flex; flex-direction: column; }
.topbar { position: sticky; top: 0; background: var(--white); border-bottom: 1px solid var(--light-gray); padding: 14px 22px; display:flex; justify-content: space-between; align-items: center; z-index: 2; }
.page-title { color: var(--accent-color); font-weight: 700; }
.main { padding: 22px; }

@media (max-width: 900px) {
  .sidebar { position: static; width: 100%; height: auto; flex-direction: row; align-items: center; gap: 16px; }
  .content { margin-left: 0; }
}
</style>
