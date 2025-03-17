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

<style scoped>
/* Navigation */
nav {
    position: absolute;
    top: 70px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-width: 1200px;
    z-index: 999;
    background-color: transparent;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* Hamburger Menu */
.hamburger {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px;
    z-index: 1001;
}

.bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    background-color: var(--text-color);
    transition: all 0.3s ease;
}

.hamburger.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
}

.hamburger.active .bar:nth-child(2) {
    opacity: 0;
}

.hamburger.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
}

.nav-items {
    display: flex;
    align-items: center;
}

/* Logo */
.logo {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--text-color);
    font-weight: bold;
    margin-right: 20px;
}

.logo img {
    width: 200px;
    height: 60px;
    object-fit: contain;
}

.logo span {
    font-size: 1.2rem;
    padding: 0.5rem;
    font-weight: bold;
}

.logo p {
    font-size: 0.7rem;
}

.menu {
    display: flex;
    list-style: none;
}

.menu li {
    margin: 0 15px;
}

.menu a {
    text-decoration: none;
    color: var(--white);
    font-weight: 500;
    transition: color 0.3s ease;
}

.menu a:hover {
    color: var(--primary-color);
}

.cta-header {
    text-align: right;
    margin-top: 10px;
}

.cta-header p {
    margin-top: 0.5rem;
    font-size: 0.8rem;
}

.cta-header p span {
    font-weight: bold;
}

@media (max-width: 768px) {

    /* Header & Navigation */
    nav {
        left: 0;
        transform: none;
        width: 100%;
        top: 60px;
    }

    .hamburger {
        display: block;
    }

    .nav-items {
        display: none;
        position: fixed;
        top: 80px;
        left: 0;
        width: 100%;
        background: var(--white);
        padding: 20px;
        box-shadow: var(--box-shadow);
        z-index: 1000;
        flex-direction: column;
    }

    .nav-items.active {
        display: flex;
        top: 80px;
    }

    .menu {
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .menu li {
        margin: 15px 0;
        width: 100%;
        text-align: center;
    }

    .menu a {
        color: var(--text-color);
    }

    .cta-header {
        text-align: center;
        margin-top: 20px;
    }

    body.menu-open {
        overflow: hidden;
    }
}
</style>