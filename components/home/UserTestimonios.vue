<template>
    <section class="testimonios">
        <h2>Testimonios de nuestros pacientes</h2>
        <div class="container">
            <div v-if="testimonios.length > 0" class="testimonios-wrapper">
                <div class="testimonios-slider">
                    <div class="testimonios-track" :style="trackStyle">
                        <!-- Testimonios dinámicos -->
                        <div v-for="(testimonio, index) in testimonios" :key="index" class="testimonio">
                            <h3>{{ testimonio.nombre }}</h3>
                            <div class="rating">
                                <i v-for="star in 5" :key="star" :class="getStarClass(testimonio.rating, star)"></i>
                            </div>
                            <p>{{ testimonio.texto }}</p>
                        </div>
                    </div>
                </div>
                <!-- Botones de navegación -->
                <button class="slider-nav prev-btn" aria-label="Previous" @click="prevSlide">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button class="slider-nav next-btn" aria-label="Next" @click="nextSlide">
                    <i class="fas fa-chevron-right"></i>
                </button>
                <!-- Indicadores de puntos -->
                <div class="slider-dots">
                    <span v-for="(_, index) in slidesCount" :key="index"
                        :class="['dot', { active: currentSlide === index }]" @click="goToSlide(index)"></span>
                </div>
            </div>
            <div v-else class="no-testimonios">
                <p>No hay testimonios disponibles en este momento.</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'UserTestimonios',
    data() {
        return {
            testimonios: [
                {
                    nombre: 'María González',
                    rating: 5,
                    texto: 'Excelente atención en Periodent Biscucuy. Me realicé una limpieza dental y el trato fue muy profesional. Recomiendo la clínica a todos en Portuguesa.',
                },
                {
                    nombre: 'Carlos Pérez',
                    rating: 5,
                    texto: 'Me colocaron implantes dentales en la sede de Chabasquén. El equipo es muy amable y los resultados superaron mis expectativas. ¡Gracias Periodent!',
                },
                {
                    nombre: 'Ana Rodríguez',
                    rating: 5,
                    texto: 'Llevé a mi hijo para ortodoncia en Periodent y la experiencia fue excelente. Muy buena atención y precios accesibles en Portuguesa.',
                }
            ],
            currentSlide: 0,
            visibleSlides: 3, // Número de testimonios visibles a la vez
            intervalId: null
        };
    },
    computed: {
        slidesCount() {
            return Math.ceil(this.testimonios.length / this.visibleSlides);
        },
        trackStyle() {
            return {
                transform: `translateX(-${this.currentSlide * (100 / this.visibleSlides)}%)`
            };
        }
    },
    mounted() {
        this.startSlideshow();
        this.adjustVisibleSlides();
        window.addEventListener('resize', this.adjustVisibleSlides);
    },

    beforeUnmount() {
        window.removeEventListener('resize', this.updateItemsPerSlide);
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
            if (this.currentSlide < this.slidesCount - 1) {
                this.currentSlide++;
            } else {
                this.currentSlide = 0;
            }
        },
        prevSlide() {
            if (this.currentSlide > 0) {
                this.currentSlide--;
            } else {
                this.currentSlide = this.slidesCount - 1;
            }
        },
        goToSlide(index) {
            this.currentSlide = index;
        },
        getStarClass(rating, position) {
            if (rating >= position) {
                return 'fas fa-star';
            } else if (rating >= position - 0.5) {
                return 'fas fa-star-half-alt';
            } else {
                return 'far fa-star';
            }
        },
        adjustVisibleSlides() {
            if (window.innerWidth < 768) {
                this.visibleSlides = 1;
            } else if (window.innerWidth < 1024) {
                this.visibleSlides = 2;
            } else {
                this.visibleSlides = 3;
            }
        }
    }
};
</script>

<style scoped>
.testimonios {
    padding: 60px 0;
    background: #f8f9f9;
    overflow: hidden;
}

.testimonios h2 {
    text-align: center;
    color: var(--accent-color);
    font-size: 2rem;
    margin-bottom: 2rem;
}

.testimonios-wrapper {
    position: relative;
    max-width: 100%;
    margin: 0 auto;
    padding: 0 40px;
}

.testimonios-slider {
    overflow: hidden;
    margin: 20px 0;
}

.testimonios-track {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.testimonio {
    min-width: 300px;
    max-width: 350px;
    padding: 20px;
    background: var(--white);
    border-radius: 10px;
    box-shadow: var(--box-shadow);
    margin: 0 15px;
    min-height: 200px;
    flex-shrink: 0;
}

.testimonio h3 {
    color: var(--text-color);
    margin-bottom: 15px;
    font-size: 1.5rem;
}

.testimonio p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 10px;
}

.source {
    color: #888;
    font-style: italic;
    font-size: 0.9rem;
}

.rating {
    color: #F57C00;
    margin-bottom: 15px;
}

.slider-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: var(--white);
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    z-index: 2;
    transition: background-color 0.3s ease;
}

.slider-nav:hover {
    background-color: rgba(0, 0, 0, 0.7);
}

.prev-btn {
    left: 10px;
}

.next-btn {
    right: 10px;
}

.slider-dots {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 20px;
}

.dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #ccc;
    cursor: pointer;
    transition: background 0.3s ease;
}

.dot.active {
    background: var(--text-color);
}

@media (max-width: 768px) {
    .testimonios-wrapper {
        padding: 0 20px;
    }

    .testimonio h3 {
        font-size: 1.2rem;
    }
}

@media (max-width: 350px) {
    .testimonio {
        min-width: 350px;
        padding: 15px;
    }
}
</style>