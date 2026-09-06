<template>
  <div class="precios">
    <section class="page-header">
      <div class="header-content">
        
        <NuxtImg src="/img/precios-header.webp" alt="Tratamientos dentales en Periodent - Ortodoncia, implantes y más" format="webp" loading="lazy" sizes="600px" class="header-image" />
      
      </div>
    </section>
    <PreciosTable />
    <CtaFinal />
  </div>
</template>

<script setup>
useHead({
  title: 'Tratamientos dentales | Especialidades Odontológicas Periodent',
  meta: [
    { key: 'description', name: 'description', content: 'Conoce nuestros tratamientos odontológicos y solicita una orientación personalizada en Periodent.' },
    { key: 'og:title', property: 'og:title', content: 'Tratamientos dentales | Especialidades Odontológicas Periodent' },
    { key: 'og:description', property: 'og:description', content: 'Conoce nuestros tratamientos odontológicos y solicita una orientación personalizada en Periodent.' },
    { key: 'og:image', property: 'og:image', content: '/img/mujer-cruzando-dedos.avif' },
    { key: 'og:type', property: 'og:type', content: 'website' },
    { key: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
    { key: 'twitter:title', name: 'twitter:title', content: 'Tratamientos dentales | Especialidades Odontológicas Periodent' },
    { key: 'twitter:description', name: 'twitter:description', content: 'Conoce nuestros tratamientos odontológicos y solicita una orientación personalizada en Periodent.' },
    { key: 'twitter:image', name: 'twitter:image', content: '/img/mujer-cruzando-dedos.avif' }
  ]
})
</script>

<style scoped>
.precios {
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
