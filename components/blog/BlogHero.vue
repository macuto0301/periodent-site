<template>
  <section class="blog-hero">
    <div class="container">
      <h1 class="blog-hero-title">Blog de Periodent</h1>
      <p class="blog-hero-subtitle">
        Consejos, noticias y artículos sobre salud dental para mantener tu sonrisa perfecta
      </p>
    </div>
  </section>
</template>

<style scoped>
.blog-hero {
  background: linear-gradient(135deg, var(--accent-color) 0%, var(--primary-color) 100%);
  color: var(--white);
  padding: var(--hero-offset) 0 60px;
  text-align: center;
  margin-bottom: 60px;
  margin-top: 0px;
}

.blog-hero-title {
  font-size: 3rem;
  margin-bottom: 15px;
  font-weight: 700;
}

.blog-hero-subtitle {
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
  opacity: 0.95;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .blog-hero {
    padding: var(--hero-offset) 0 40px;
    margin-bottom: 40px;
  }
  
  .blog-hero-title {
    font-size: 2rem;
  }
  
  .blog-hero-subtitle {
    font-size: 1rem;
  }
}
</style>
