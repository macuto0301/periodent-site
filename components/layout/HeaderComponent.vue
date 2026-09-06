<template>
    <header>
        <div class="container">
            <div class="info-superior" :class="{ 'hidden': isScrolled || autoHidden }">
                <div class="direccion">
                    <i class="fas fa-map-marker-alt"></i>&nbsp;{{ clinicInfo.locations.biscucuy.address }}
                    {{ clinicInfo.locations.biscucuy.city }}
                </div>
                <div class="direccion">
                    <i class="fas fa-map-marker-alt"></i>&nbsp;{{ clinicInfo.locations.chabasquen.address }}
                    {{ clinicInfo.locations.chabasquen.city }}
                </div>
                <div class="telefonos">
                    <i class="fas fa-phone"></i> <a :href="clinicInfo.phoneHref">{{ clinicInfo.phone }}</a>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { clinicInfo } from '@/data/clinic-info';

export default {
    name: 'HeaderComponent',
    data() {
        return {
            clinicInfo,
            isScrolled: false,
            autoHidden: false,
            scrollThreshold: 50,
            autoHideDelay: 4000
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleScroll);
        this.handleScroll(); // Initial call
        this.autoHideTimer = setTimeout(() => {
            this.autoHidden = true;
            this.updateOffsets();
        }, this.autoHideDelay);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleScroll);
        clearTimeout(this.autoHideTimer);
    },
    methods: {
        handleScroll() {
            this.isScrolled = window.scrollY > this.scrollThreshold;
            this.updateOffsets();
        },
        updateOffsets() {
            const hidden = this.isScrolled || this.autoHidden;

            // Update a CSS variable to coordinate with NavigationComponent
            // Adjust offset based on screen size
            const isMobile = window.innerWidth <= 480;
            const offset = hidden ? '0px' : (isMobile ? '45px' : '80px');
            document.documentElement.style.setProperty('--header-offset', offset);
            document.documentElement.style.setProperty(
                '--hero-offset',
                hidden ? (isMobile ? '52px' : '74px') : (isMobile ? '97px' : '154px')
            );
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
    min-height: 80px;
    height: auto;
    overflow: visible;
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
    word-wrap: break-word;
    word-break: break-word; /* Ensure long words/addresses wrap */
    flex: 1; /* Allow it to take available space */
}

.info-superior i {
    margin-right: 8px;
}

.info-superior a {
    color: inherit;
    text-decoration: underline;
    text-underline-offset: 3px;
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
    .info-superior {
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        height: auto;
        min-height: 45px;
        padding: 5px;
    }

    .info-superior .direccion:first-child {
        font-size: 0.65rem;
        line-height: 1.2;
        text-align: center;
        width: 100%;
        padding: 3px 8px;
        flex: 1;
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
        font-size: 0.65rem;
        padding: 2px 5px;
        min-width: auto;
    }
}

@media (max-width: 338px) {
    .info-superior .telefonos {
        display: none;
    }

    .info-superior .direccion {
        display: flex;
        font-size: 0.6rem;
    }
}
</style>