<template>
    <div class="hero-nav">

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
    position: fixed;
    top: calc(var(--header-offset, 70px) + 0px);
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 100%;
    z-index: 999;

    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: top 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(8px);
}

/* Hamburger Menu */
.hamburger {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px;
    z-index: 1001;
    position: relative;
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
    justify-content: flex-end;
    width: 100%;
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
    margin-right: 20px;
}

.menu li {
    margin: 0 15px;
    position: relative;
}

.menu a {
    text-decoration: none;
    color: var(--text-color);
    font-weight: 600;
    transition: all 0.3s ease;
    padding: 8px 12px;
    position: relative;
    letter-spacing: 0.5px;
    border-radius: 4px;
    display: inline-block;
}

.menu a:hover {
    color: var(--primary-color);
    background-color: rgba(255, 255, 255, 0.15);
}

.menu a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--primary-color);
    transition: width 0.3s ease;
}

.menu a:hover::after {
    width: 80%;
}

.cta-header {
    text-align: right;
    margin-top: 10px;
}

.cta-header .btn-primary {
    background-color: var(--primary-color);
    color: white;
    padding: 10px 20px;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border: none;
    display: inline-block;
}

.cta-header .btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
    background-color: var(--accent-color);
}

@media (max-width: 768px) {

    /* Header & Navigation */
    nav {
        left: 0;
        transform: none;
        width: 100%;
        top: calc(var(--header-offset, 80px) + 0px);
        transition: top 0.3s ease;


    }

    .hamburger {
        display: block;
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
    }

    .nav-items {
        display: none;
        position: fixed;
        top: calc(var(--header-offset, 80px) + 20px);
        left: 0;
        width: 100%;
        background: white;
        padding: 20px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        flex-direction: column;
        transition: all 0.3s ease;
        border-radius: 0 0 10px 10px;
        max-height: 80vh;
        overflow-y: auto;
    }

    .nav-items.active {
        display: flex;
    }

    .menu {
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-right: 0;
    }

    .menu li {
        margin: 10px 0;
        width: 100%;
        text-align: center;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        padding-bottom: 10px;
    }

    .menu li:last-child {
        border-bottom: none;
    }

    .menu a {
        color: var(--text-color);
        display: block;
        padding: 10px;
        font-size: 1.1rem;
    }

    .menu a::after {
        display: none;
    }

    .menu a:hover {
        background-color: rgba(var(--primary-color-rgb), 0.1);
        border-radius: 8px;
    }

    .cta-header {
        text-align: center;
        margin-top: 20px;
        width: 100%;
    }

    .cta-header .btn-primary {
        width: 80%;
        padding: 12px 20px;
        font-size: 1.1rem;
    }
}
</style>