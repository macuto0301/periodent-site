<template>
    <div class="hero-nav">
        <div class="container">
            <nav>
                <div class="logo">
                    <router-link to="/">
                        <img src="@/assets/img/logo-periodent.webp" alt="Logo Periodent" width="200" height="60">
                    </router-link>
                </div>
                <!-- Botón del menú hamburguesa -->
                <button class="hamburger" aria-label="Menu" @click="toggleMenu">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </button>
                <!-- Menú de navegación -->
                <div class="nav-items" :class="{ 'active': menuActive }">
                    <ul class="menu">
                        <li><router-link to="/">Inicio</router-link></li>
                        <li><router-link to="/servicios">Servicios</router-link></li>
                        <li><router-link to="/precios">Precios</router-link></li>
                        <li><router-link to="/contacto">Contacto</router-link></li>
                    </ul>
                    <div class="cta-header">
                        <router-link to="/contacto" class="btn btn-primary">Solicitar cita</router-link>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavigationComponent',
    data() {
        return {
            menuActive: false
        };
    },
    methods: {
        toggleMenu() {
            this.menuActive = !this.menuActive;
        }
    }
};
</script>