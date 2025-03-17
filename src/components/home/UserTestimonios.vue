<template>
    <section class="testimonios">
        <h2>100% OPINIONES POSITIVAS EN YANDEX</h2>
        <div class="container">
            <div class="testimonios-wrapper">
                <div class="testimonios-slider">
                    <div class="testimonios-track" :style="trackStyle">
                        <!-- Testimonios dinámicos -->
                        <div v-for="(testimonio, index) in testimonios" :key="index" class="testimonio">
                            <h3>{{ testimonio.nombre }}</h3>
                            <div class="rating">
                                <i v-for="star in 5" :key="star" :class="getStarClass(testimonio.rating, star)"></i>
                            </div>
                            <p>{{ testimonio.texto }}</p>
                            <p class="source">{{ testimonio.fuente }}</p>
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
                    nombre: 'Nikita N.',
                    rating: 5,
                    texto: 'Maravillosa clínica Periodent con un servicio excelente...',
                    fuente: 'Reseña de Yandex'
                },
                {
                    nombre: 'Alessandra Tiss',
                    rating: 5,
                    texto: 'Excelente clínica con una ubicación conveniente. Se puede llegar en transporte público desde Kievskaya, Prospekt Lomonosova o incluso Sportivnaya. La orientación al cliente está a un nivel muy alto. Los médicos y administradores son muy amables.',
                    fuente: 'Reseña de Yandex'
                },
                {
                    nombre: 'Diana D.',
                    rating: 5,
                    texto: 'Muy buena clínica. Todos son profesionales en su campo. Explican claramente el tratamiento, siempre están disponibles. Las recepcionistas son maravillosas, siempre ayudan y asesoran.',
                    fuente: 'Reseña de Yandex'
                },
                {
                    nombre: 'Daniil Apet',
                    rating: 4.5,
                    texto: 'Muchas gracias por curarme bien los dientes e instalarme el sistema de brackets. Cada visita fue con una cálida bienvenida y un servicio de calidad. Es importante destacar la profesionalidad y rapidez de los médicos.',
                    fuente: 'Reseña de Yandex'
                },
                {
                    nombre: 'Sofía M.',
                    rating: 5,
                    texto: 'Increíble atención y resultados. Me quitaron el miedo a ir al dentista. ¡Recomiendo esta clínica!',
                    fuente: 'Reseña de Yandex'
                },
                {
                    nombre: 'Iván K.',
                    rating: 5,
                    texto: 'El mejor equipo dental que he visitado. Siempre explican todo con claridad y paciencia.',
                    fuente: 'Reseña de Yandex'
                },
                {
                    nombre: 'Olga P.',
                    rating: 5,
                    texto: 'Un lugar donde realmente cuidan de ti. ¡Gracias por mi nueva sonrisa!',
                    fuente: 'Reseña de Yandex'
                },
                {
                    nombre: 'Mijaíl R.',
                    rating: 5,
                    texto: 'Profesionales de primer nivel. El precio es justo por la calidad del servicio.',
                    fuente: 'Reseña de Yandex'
                },
                {
                    nombre: 'Anastasia B.',
                    rating: 5,
                    texto: 'Una experiencia impecable. Todo el personal es amable y atento. ¡Muy recomendable!',
                    fuente: 'Reseña de Yandex'
                },
                {
                    nombre: 'Elena G.',
                    rating: 5,
                    texto: 'Me encantó la atención personalizada. ¡Definitivamente regresaré!',
                    fuente: 'Reseña de Yandex'
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