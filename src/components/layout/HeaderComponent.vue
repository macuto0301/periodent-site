<template>
    <header>
        <div class="container">
            <div class="info-superior" :class="{ 'hidden': isScrolled }">
                <div class="direccion">
                    <i class="fas fa-map-marker-alt"></i>&nbsp;Carrera 1 Bolivar, entre calle Paez y Negro Primero.
                    Al lado de la antigua Casa Blanca. Biscucuy-Portuguesa.
                </div>
                <div class="direccion">
                    <i class="fas fa-map-marker-alt"></i>&nbsp;Final calle Bolívar. Sector de la peñita. A 2
                    cuadras de la plaza Bolívar. Chabasquen-Portuguesa.
                </div>
                <div class="telefonos">
                    <i class="fas fa-phone"></i> +58 (412) 155 35 98 / +58 (412) 155 35 98
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data() {
        return {
            isScrolled: false,
            scrollThreshold: 50
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const scrolled = window.scrollY > this.scrollThreshold;
            this.isScrolled = scrolled;

            // Update a CSS variable to coordinate with NavigationComponent
            document.documentElement.style.setProperty('--header-offset', scrolled ? '0px' : '80px');
        }
    }
};
</script>

<style scoped>
header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    background: transparent;
}

.info-superior {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--primary-color);
    color: var(--white);
    padding: 10px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    transition: transform 0.3s ease;
    height: 80px;
    overflow: hidden;
}

.info-superior.hidden {
    transform: translateY(-100%);
}

.info-superior .direccion,
.info-superior .telefonos {
    padding: 0 5px;
    font-size: clamp(0.7rem, 1vw, 0.9rem);
    line-height: 1.4;
    overflow: hidden;
    max-width: 33%;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    white-space: normal;
}

.info-superior i {
    margin-right: 8px;
}

.info-superior-direccion,
.info-superior-telefonos,
.info-superior-estacionamiento {
    display: flex;
    align-items: center;
    margin-right: 2rem;
}

@media (max-width: 1080px) {
    .info-superior .telefonos {
        display: none;
    }

    .info-superior .direccion {
        max-width: 48%;
        font-size: clamp(0.65rem, 1.2vw, 0.85rem);
    }
}

@media (max-width: 768px) {

    .info-superior .direccion:nth-child(2),
    .info-superior .telefonos {
        display: none;
    }

    .info-superior .direccion:first-child {
        font-size: clamp(0.6rem, 2vw, 0.8rem);
        line-height: 1.3;
        padding: 5px 10px;
        max-width: 100%;
        -webkit-line-clamp: 3;
    }

    .info-superior {
        padding: 5px 0;
    }
}

@media (max-width: 480px) {
    .info-superior .direccion:first-child {
        font-size: 0.75rem;
        line-height: 1.3;
    }
}

@media (max-width: 350px) {
    .info-superior .telefonos {
        display: none;
    }

    .info-superior .direccion {
        display: flex;
        font-size: 0.65rem;
        padding: 2px 5px;
        min-width: 350px;
    }
}

@media (max-width: 338px) {
    .info-superior .telefonos {
        display: none;
    }

    .info-superior .direccion {
        display: flex;
        font-size: 0.3rem;
    }
}
</style>