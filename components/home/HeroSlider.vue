<template>
  <section class="hero">
    <div class="hero-slider" @mouseenter="pauseSlideshow" @mouseleave="resumeSlideshow" @focusin="pauseSlideshow" @focusout="resumeSlideshow">
      <div class="slider-container"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          :class="['slide', { active: currentSlide === index }]"
        >
          <NuxtImg
            :src="`/img/${slide.image}`"
            :alt="slide.alt"
            :loading="index === 0 ? 'eager' : 'lazy'"
            :fetchpriority="index === 0 ? 'high' : undefined"
            width="900"
            height="500"
            sizes="(max-width: 900px) 100vw, 900px"
            format="webp"
            decoding="async"
          />
          <div class="overlay"></div>
          <div class="slide-content">
            <h1 v-if="index === 0" class="hero-title">Clínica dental en Biscucuy y Chabasquén</h1>
            <h2 class="hero-service-title">{{ slide.title }}</h2>
            <p class="hero-subtitle">{{ slide.subtitle }}</p>
            
            <p v-if="index === 0" class="hero-local-lead">Atención odontológica integral, cercana y con tecnología avanzada.</p>
            <PrimaryButton to="/contacto">Agenda tu Cita</PrimaryButton>
          </div>
        </div>
      </div>
      <div class="slider-controls">
        <button class="prev-slide" aria-label="Anterior" @click="prevSlide">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="next-slide" aria-label="Siguiente" @click="nextSlide">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
      <div class="slider-dots" aria-label="Seleccionar diapositiva">
        <button
          v-for="(slide, index) in slides"
          :key="`dot-${index}`"
          :class="['dot', { active: currentSlide === index }]"
          role="button"
          tabindex="0"
          :aria-label="`Ir a la diapositiva ${index + 1}`"
          :aria-current="currentSlide === index ? 'true' : undefined"
          @click="goToSlide(index)"
          @keydown.enter="goToSlide(index)"
          @keydown.space.prevent="goToSlide(index)"
        ></button>
      </div>
      <button class="slider-pause" type="button" :aria-label="isPaused ? 'Reanudar carrusel' : 'Pausar carrusel'" @click="toggleSlideshow">
        <i :class="isPaused ? 'fas fa-play' : 'fas fa-pause'" aria-hidden="true"></i>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSlider',
  data() {
    return {
      slides: [
        {
          image: 'slider-image1.webp',
          alt: 'Ortodoncia en Portuguesa - Brackets y Alineadores',
        },
        {
          image: 'slider-image2.webp',
          alt: 'Implantes Dentales en Periodent - Recupera tu sonrisa',
          title: 'Implantes Dentales',
          subtitle: 'Recupera tu sonrisa con tecnología avanzada',
        },
        {
          image: 'slider-image3.webp',
          alt: 'Clínicas en Biscucuy y Chabasquén - Ubicación Periodent',
          title: 'Ubicación',
          subtitle: 'Clínicas en Biscucuy y Chabasquén',
        },
      ],
      currentSlide: 0,
      intervalId: null,
      touchStartX: 0,
      touchEndX: 0,
      touchStartY: 0,
      touchEndY: 0,
      isPaused: false,
      prefersReducedMotion: false,
    };
  },
  mounted() {
    this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!this.prefersReducedMotion) {
      this.startSlideshow();
    }
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
  methods: {
    startSlideshow() {
      this.intervalId = setInterval(() => {
        this.nextSlide();
      }, 6000);
    },
    stopSlideshow() {
      clearInterval(this.intervalId);
      this.intervalId = null;
    },
    pauseSlideshow() {
      this.isPaused = true;
      this.stopSlideshow();
    },
    resumeSlideshow() {
      if (this.prefersReducedMotion) return;
      this.isPaused = false;
      if (!this.intervalId) this.startSlideshow();
    },
    toggleSlideshow() {
      if (this.isPaused) {
        this.resumeSlideshow();
      } else {
        this.pauseSlideshow();
      }
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentSlide =
        (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    },
    goToSlide(index) {
      this.currentSlide = index;
    },
    handleTouchStart(e) {
      this.touchStartX = e.touches[0].clientX;
      this.touchStartY = e.touches[0].clientY;
      this.stopSlideshow();
    },
    handleTouchMove(e) {
      this.touchEndX = e.touches[0].clientX;
      this.touchEndY = e.touches[0].clientY;
    },
    handleTouchEnd() {
      const diffX = this.touchStartX - this.touchEndX;
      const diffY = Math.abs(this.touchStartY - this.touchEndY);
      
      // Solo deslizar si el movimiento horizontal es mayor que el vertical
      if (Math.abs(diffX) > 50 && Math.abs(diffX) > diffY) {
        if (diffX > 0) {
          this.nextSlide();
        } else {
          this.prevSlide();
        }
      }
      
      this.resumeSlideshow();
    },
  },
};
</script>

<style scoped>
.hero {
  position: relative;
  margin-top: var(--hero-offset, 154px);
  height: min(760px, calc(100svh - var(--hero-offset, 154px)));
  min-height: 520px;
  overflow: hidden;
  background: #d3d0d3;
}
.hero-slider {
  width: 100%;
  height: 100%;
  position: relative;
}
.slider-container {
  width: 100%;
  height: 100%;
  position: relative;
}
.slide {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.6s;
  pointer-events: none;
}
.slide.active {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  z-index: 2;
}
.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}
.overlay {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(187, 181, 184, 0.2);
  z-index: 1;
}
.slide-content {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  color: #fff;
  text-align: center;
  width: min(90%, 680px);
  min-width: 0;
  max-width: 680px;
  padding: 1.6rem clamp(1rem, 4vw, 2rem);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.hero-title {
  font-size: clamp(1.8rem, 3vw, 3rem);
  font-weight: 800;
  margin-bottom: 0.4rem;
  max-width: 100%;
  overflow-wrap: anywhere;
  text-shadow: 2px 2px 8px #000a;
}

.hero-service-title {
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  font-weight: 800;
  margin-bottom: 0.6rem;
  max-width: 100%;
  overflow-wrap: anywhere;
  text-shadow: 2px 2px 8px #000a;
}

.hero-subtitle {
  font-size: 1.1rem;
  margin-bottom: 1.4rem;
  max-width: 36rem;
  overflow-wrap: anywhere;
  text-shadow: 1px 1px 6px #000a;
}

.hero-local-lead {
  margin-top: 1rem;
  font-size: 1rem;
  line-height: 1.5;
  max-width: 34rem;
  overflow-wrap: anywhere;
  text-shadow: 1px 1px 6px #000a;
  margin-bottom: 0.6rem;
}
.slide-content :deep(.primary-btn) {
  max-width: 100%;
  white-space: normal;
  text-align: center;
}
.cta-btn {
  background: var(--brand-pink, #EC407A);
  color: #fff;
  font-weight: 700;
  padding: 0.9rem 2.2rem;
  border-radius: 30px;
  text-decoration: none;
  font-size: 1.1rem;
  box-shadow: 0 4px 24px #0003;
  transition: background 0.2s, transform 0.2s;
  border: none;
  outline: none;
  cursor: pointer;
}
.cta-btn:hover {
  background: var(--primary-strong, #4A148C);
  transform: translateY(-2px) scale(1.04);
}
.slider-controls {
  position: absolute;
  top: 50%;
  width: 100%;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  transform: translateY(-50%);
}
.prev-slide, .next-slide {
  background: rgba(0,0,0,0.5);
  color: #fff;
  border: none;
  width: 44px; height: 44px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
  transition: background 0.2s;
}
.prev-slide:hover, .next-slide:hover {
  background: var(--brand-pink, #EC407A);
}
.slider-dots {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 3;
}
.dot {
  width: 14px; height: 14px;
  border-radius: 50%;
  background: rgba(255,255,255,0.5);
  border: 0;
  padding: 0;
  cursor: pointer;
  transition: background 0.3s;
}
.dot.active {
  background: #fff;
}
.slider-pause {
  position: absolute;
  right: 30px;
  bottom: 24px;
  z-index: 3;
  width: 36px;
  height: 36px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  cursor: pointer;
}
.slider-pause:hover,
.slider-pause:focus-visible {
  background: var(--brand-pink, #EC407A);
}
@media (max-width: 900px) {
  .hero-title { font-size: 1.3rem; }
  .hero-service-title { font-size: 2rem; }
  .hero-subtitle { font-size: 1rem; }
  .hero-local-lead { font-size: 0.9rem; }
}
@media (max-width: 768px) {
  .slider-controls {
    display: none;
  }

  .slider-pause {
    right: 16px;
    bottom: 20px;
  }
}

@media (max-width: 600px) {
  .hero {
    height: clamp(480px, calc(100svh - var(--hero-offset, 52px)), 640px);
    min-height: 480px;
  }
  .slide img { object-position: 58% center; }
  .slide-content {
    width: calc(100% - 2rem);
    padding: 1rem 0.25rem;
  }
  .hero-title { font-size: clamp(1.35rem, 6vw, 1.8rem); }
  .hero-service-title { font-size: clamp(1.4rem, 7vw, 2rem); }
  .hero-subtitle { font-size: 0.95rem; }
  .hero-local-lead { font-size: 0.85rem; }
  .slide-content :deep(.primary-btn) {
    font-size: 1rem;
    padding: 0.8rem 1.4rem;
  }
}
</style>