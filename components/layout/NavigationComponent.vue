<template>
    <div class="hero-nav">

        <nav>
            <div class="logo">
                <NuxtLink to="/">
                    <NuxtImg src="/img/logo-periodent.webp"
                              alt="Periodent - Clínica Dental en Biscucuy y Chabásquen, Portuguesa"
                              format="webp"
                              loading="lazy"
                              width="210"
                              height="63"
                              sizes="(max-width: 210px) 100vw, 210px"
                    />
                </NuxtLink>
            </div>
            <!-- Botón del menú hamburguesa -->
            <button
                class="hamburger"
                :class="{ 'active': menuActive }"
                type="button"
                :aria-label="menuActive ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'"
                :aria-expanded="menuActive"
                aria-controls="site-navigation"
                @click="toggleMenu"
            >
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </button>
            <!-- Menú de navegación -->
            <div id="site-navigation" class="nav-items" :class="{ 'active': menuActive }">
                <button class="close-menu" type="button" aria-label="Cerrar menú de navegación" @click="closeMenu">
                    <span class="close-icon" aria-hidden="true">×</span>
                </button>
                <ul class="menu" @click="closeMenu">
                    <li><NuxtLink to="/">Inicio</NuxtLink></li>
                    <li><NuxtLink to="/servicios">Servicios</NuxtLink></li>
                    <li><NuxtLink to="/precios">Tratamientos</NuxtLink></li>
                    <li><NuxtLink to="/blog">Blog</NuxtLink></li>
                    <li><NuxtLink to="/ubicacion/biscucuy">Biscucuy</NuxtLink></li>
                    <li><NuxtLink to="/ubicacion/chabasquen">Chabásquen</NuxtLink></li>
                    <li><NuxtLink to="/preguntas-frecuentes">FAQ</NuxtLink></li>
                    <li><NuxtLink to="/contacto">Contacto</NuxtLink></li>
                </ul>
                <div class="cta-header">
                   <PrimaryButton to="/contacto">Solicitar cita</PrimaryButton>
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
            menuActive: false,
            navOpacity: 0
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('keydown', this.handleKeydown);
        this.handleScroll(); // Initial call
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('keydown', this.handleKeydown);
        document.body.classList.remove('menu-open');
    },
    methods: {
        toggleMenu() {
            this.menuActive = !this.menuActive;
            this.updateBodyLock();
        },
        closeMenu() {
            this.menuActive = false;
            this.updateBodyLock();
        },
        handleKeydown(event) {
            if (event.key === 'Escape' && this.menuActive) {
                this.closeMenu();
            }
        },
        updateBodyLock() {
            document.body.classList.toggle('menu-open', this.menuActive);
        },
        handleScroll() {
            // Increase opacity as user scrolls
            // At 0px: opacity 0
            // At 300px: opacity 0.95
            const scrolled = window.scrollY;
            const maxScroll = 300;
            const minOpacity = 0.86;
            const maxOpacity = 0.95;
            
            this.navOpacity = Math.min(
                minOpacity + (scrolled / maxScroll) * (maxOpacity - minOpacity),
                maxOpacity
            );
            
            // Update CSS variable
            document.documentElement.style.setProperty(
                '--nav-opacity',
                this.navOpacity.toString()
            );
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
    z-index: 99;

    padding: 0.6rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: top 0.3s ease;
    background: rgba(255, 255, 255, 0.96);
    box-shadow: 0 3px 14px rgba(49, 27, 146, 0.12);
   
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

/* Close Menu Button */
.close-menu {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 45px;
    right: 20px;
    z-index: 1002;
    padding: 10px;
}

.close-icon {
    font-size: 2rem;
    color: var(--white);
    display: block;
    line-height: 1;
    font-weight: 300;
}

.bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    background-color: var(--accent-color);
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
    color: var(--white);
    font-weight: bold;
    margin-right: 20px;
    flex-shrink: 0;
}

.logo img {
    width: 170px;
    height: 52px;
    object-fit: contain;
    filter: drop-shadow(0 2px 4px rgba(49, 27, 146, 0.18));
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
    margin: 0 8px;
    position: relative;
}

.menu a {
    text-decoration: none;
    color: var(--accent-color);
    font-weight: 600;
    transition: all 0.3s ease;
    padding: 8px 8px;
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
    margin-top: 0;
}

.cta-header .btn-primary {
    background-color: var(--primary-color);
    color: white;
    padding: 10px 14px;
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

    .close-menu {
        display: block;
    }    /* Header & Navigation */
    nav {
        left: 0;
        transform: none;
        width: 100%;
        top: calc(var(--header-offset, 80px) + 0px);
        transition: top 0.3s ease;
        padding: 0.75rem 1rem;
        position: fixed;
        justify-content: space-between;
    }

    .logo {
        margin: 0;
    }

    .logo img {
        width: 150px;
        height: 45px;
    }

    .hamburger {
        display: block;
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
        transition: opacity 0.6s ease;
    }

    .hamburger.active {
        opacity: 0;
        pointer-events: none;
    }

    .nav-items {
        display: flex;
        position: fixed;
        top: 0;
        right: -100%;
        width: 100%;
        height: 100vh;
        background: rgba(51, 51, 51, 0.98);
       
        padding: 20px 0;
        box-shadow: 2px 0 20px rgba(0, 0, 0, 0.4);
        z-index: 998;
        flex-direction: column;
        justify-content: flex-start;
        transition: right 0.3s ease;
        border-radius: 0;
        overflow-y: auto;
        align-items: stretch;
    }

    .nav-items.active {
        right: 0;
    }

    .menu {
        flex-direction: column;
        align-items: stretch;
        width: 100%;
        margin: 0;
        padding: 45px 0 0 0;
    }

    .menu li {
        margin: 0;
        width: 100%;
        text-align: left;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        padding: 0;
    }

    .menu li:last-child {
        border-bottom: none;
    }

    .menu a {
        color: var(--white);
        display: block;
        padding: 18px 20px;
        font-size: 1.1rem;
        text-align: left;
        font-weight: 600;
    }

    .menu a::after {
        display: none;
    }

    .menu a:hover {
        background-color: rgba(255, 255, 255, 0.08);
        border-radius: 0;
    }

    .cta-header {
        text-align: center;
        margin: auto 0 30px 0;
        width: 100%;
        padding: 0 20px;
        margin-top: auto;
    }

    .cta-header .btn-primary {
        width: 100%;
        padding: 14px 20px;
        font-size: 1rem;
    }
}

@media (max-width: 480px) {
    nav {
        padding: 0.5rem 0.75rem;
        top: calc(var(--header-offset, 35px) + 0px);
    }

    .logo img {
        width: 120px;
        height: 36px;
    }

    .nav-items {
        top: 0;
        height: 100vh;
        padding: 0;
    }
}
</style>