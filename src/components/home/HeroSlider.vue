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