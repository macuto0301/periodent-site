<template>
  <div class="contacto">
    <section class="page-header">
      <div class="header-content">
        <NuxtImg src="/img/contacto-header.webp" alt="Agenda tu cita dental en Periodent Biscucuy o Chabásquen - Atención profesional" format="webp" loading="lazy" sizes="600px" class="header-image" />
      </div>
      
    </section>
    <ContactoForm />
    <CtaFinal />
  </div>
</template>

<script setup>
useHead({
  title: 'Contacto | Especialidades Odontológicas Periodent',
  meta: [
    { key: 'description', name: 'description', content: 'Contáctanos para agendar tu cita dental o resolver tus dudas. Atención personalizada y rápida respuesta.' },
    { key: 'og:title', property: 'og:title', content: 'Contacto | Especialidades Odontológicas Periodent' },
    { key: 'og:description', property: 'og:description', content: 'Contáctanos para agendar tu cita dental o resolver tus dudas. Atención personalizada y rápida respuesta.' },
    { key: 'og:image', property: 'og:image', content: '/img/mujer-cruzando-dedos.avif' },
    { key: 'og:type', property: 'og:type', content: 'website' },
    { key: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
    { key: 'twitter:title', name: 'twitter:title', content: 'Contacto | Especialidades Odontológicas Periodent' },
    { key: 'twitter:description', name: 'twitter:description', content: 'Contáctanos para agendar tu cita dental o resolver tus dudas. Atención personalizada y rápida respuesta.' },
    { key: 'twitter:image', name: 'twitter:image', content: '/img/mujer-cruzando-dedos.avif' }
  ]
})
</script>

<style scoped>
.contacto {
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
