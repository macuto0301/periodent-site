<template>
  <div class="servicios">
    <section class="page-header">
      <div class="header-content">
        <NuxtImg src="/img/servicios-header.webp" alt="Servicios odontológicos" format="webp" loading="lazy" sizes="600px" class="header-image" />
      </div>
    </section>
    <ServicesList />
    <CtaFinal />
  </div>
</template>

<script setup>
useHead({
  title: 'Servicios Dentales | Especialidades Odontológicas Periodent',
  meta: [
    { key: 'description', name: 'description', content: 'Conoce todos nuestros servicios odontológicos: ortodoncia, implantes, limpieza dental y más. Atención profesional y personalizada.' },
    { key: 'og:title', property: 'og:title', content: 'Servicios Dentales | Especialidades Odontológicas Periodent' },
    { key: 'og:description', property: 'og:description', content: 'Conoce todos nuestros servicios odontológicos: ortodoncia, implantes, limpieza dental y más. Atención profesional y personalizada.' },
    { key: 'og:image', property: 'og:image', content: '/img/mujer-cruzando-dedos.avif' },
    { key: 'og:type', property: 'og:type', content: 'website' },
    { key: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
    { key: 'twitter:title', name: 'twitter:title', content: 'Servicios Dentales | Especialidades Odontológicas Periodent' },
    { key: 'twitter:description', name: 'twitter:description', content: 'Conoce todos nuestros servicios odontológicos: ortodoncia, implantes, limpieza dental y más. Atención profesional y personalizada.' },
    { key: 'twitter:image', name: 'twitter:image', content: '/img/mujer-cruzando-dedos.avif' }
  ]
})
</script>

<style scoped>

.servicios {
  min-height: 100vh;
}

.page-header {
  margin-top: 0;
  padding-top: var(--hero-offset);
}

.header-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
}

.page-title {
  font-size: 2.5rem;
  color: var(--accent-color);
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 700;
}

.header-image {
  width: 100%;
  height: 400px;
  box-shadow: var(--box-shadow);
  object-fit: cover;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
  
  .header-image {
    height: auto;
  }
}
</style>
