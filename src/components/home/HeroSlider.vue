<template>
    <section class="hero">
        <!-- Slider de imágenes -->
        <div class="hero-slider">
            <div class="slider-container">
                <div v-for="(slide, index) in slides" :key="index"
                    :class="['slide', { active: currentSlide === index }]">
                    <img :src="require(`@/assets/img/${slide.image}`)" :alt="slide.alt">
                </div>
            </div>

            <div class="slider-controls">
                <button class="prev-slide" aria-label="Previous slide" @click="prevSlide">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button class="next-slide" aria-label="Next slide" @click="nextSlide">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
            <div class="slider-dots">
                <span v-for="(slide, index) in slides" :key="`dot-${index}`"
                    :class="['dot', { active: currentSlide === index }]" @click="goToSlide(index)"
                    :data-slide="index"></span>
            </div>
        </div>

        <!-- Contenido de texto sobre el slider -->
        <div class="container">
            <div class="hero-content">
                <h1>¡Oferta especial!</h1>
                <p class="espacio">Extracción de diente retenido, distópico o supernumerario todo incluido por solo</p>
                <p class="precio">6.000 Bs.</p>
                <ul class="condiciones">
                    <li>Válido solo para nuevos pacientes y no acumulable con otros descuentos y ofertas.</li>
                    <li>Oferta válida hasta: 28.02.2025</li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HeroSlider',
    data() {
        return {
            slides: [
                { image: 'slider-image1.webp', alt: 'Oferta especial 1' },
                { image: 'slider-image2.webp', alt: 'Oferta especial 2' },
                { image: 'slider-image3.webp', alt: 'Oferta especial 3' }
            ],
            currentSlide: 0,
            intervalId: null
        };
    },
    mounted() {
        this.startSlideshow();
    },
    beforeUnmount() {
        clearInterval(this.autoplayInterval);
    },
    methods: {
        startSlideshow() {
            this.intervalId = setInterval(() => {
                this.nextSlide();
            }, 5000);
        },
        stopSlideshow() {
            clearInterval(this.intervalId);
        },
        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        },
        prevSlide() {
            this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        },
        goToSlide(index) {
            this.currentSlide = index;
        }
    }
};
</script>

<style scoped>
.hero {
    position: relative;
    height: 100vh;
    overflow: hidden;
}

.hero .container {
    height: 100%;
    position: relative;
}

.hero-content {
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
    z-index: 2;
    color: var(--white);
    max-width: 600px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    padding: 2rem;

    border-radius: 8px;
}

.hero-content h1 {
    font-size: 2.5rem;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
}

.hero-content .espacio {
    margin-top: 1rem;
    font-size: 1.1rem;
    font-weight: 500;
}

.hero-content .precio {
    font-size: 4rem;
    color: #00e5ff;
    font-weight: 700;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.8);
}

.hero-content .condiciones {
    list-style: none;
    margin-top: 1rem;
    padding-left: 1rem;
}

.hero-content .condiciones li {
    font-size: 0.85rem;
    position: relative;
    padding-left: 15px;
    line-height: 1.4;
    margin-bottom: 0.5rem;
}

.hero-content .condiciones li:before {
    content: "•";
    position: absolute;
    left: 0;
    color: #00e5ff;
}

.hero-content .condiciones li {
    font-size: 0.8rem;
}

.hero-slider {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.slider-container {
    width: 100%;
    height: 100%;
}

.slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
}

.slide.active {
    opacity: 1;
}

.slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

/* Dark overlay for better text readability */
.slide::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
}

.slider-controls {
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
    z-index: 3;
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
}

.prev-slide,
.next-slide {
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s;
}

.prev-slide:hover,
.next-slide:hover {
    background: rgba(0, 0, 0, 0.7);
}

.slider-dots {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
    z-index: 3;
}

.dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    transition: background-color 0.3s;
}

.dot.active {
    background: white;
}

@media (max-width: 768px) {
    .hero {
        height: 80vh;
    }

    .slider-container {
        height: 80vh;
    }

    .hero-content .precio {
        text-align: center;
    }

    .slide img {
        object-position: 70% center;
    }

    .hero-content {
        top: 70%;
        left: 40%;
        transform: translate(-50%, -50%);
        text-align: left;
        padding: 0rem;
    }

    .hero-content h1 {
        font-size: 2rem;
    }

    .hero-content .precio {
        font-size: 1rem;
    }

    .hero-content .condiciones li {
        font-size: 0.7rem;
    }
}

@media (max-width: 480px) {
    .hero {
        height: 70vh;
    }

    .slider-container {
        height: 70vh;
    }


}

@media (max-width: 350px) {
    .slider-controls {
        display: none;
    }
}
</style>