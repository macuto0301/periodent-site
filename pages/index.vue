<template>
  <div class="home">
    <HeroSlider />
    <InfoClinica />
    <LazyNuestrosValores hydrate-on-visible />
    <LazyListTecnologias hydrate-on-visible />
    <LazyCuidadoFinanzas hydrate-on-visible />
    <LazyUserTestimonios hydrate-on-visible />
    <LazyCtaFinal hydrate-on-visible />
  </div>
</template>

<script setup>
useHead({
  // SEO: titulo y descripcion principal de la home.
  title: 'Periodent | Clínica Dental en Biscucuy y Chabasquén, Portuguesa',
  meta: [
    { key: 'description', name: 'description', content: 'Primera consulta gratuita. Especialistas en ortodoncia e implantes dentales en Biscucuy y Chabasquén, Portuguesa. Tecnología avanzada para tu sonrisa.' },
    { key: 'og:title', property: 'og:title', content: 'Periodent | Clínica Dental en Biscucuy y Chabasquén, Portuguesa' },
    { key: 'og:description', property: 'og:description', content: 'Primera consulta gratuita. Especialistas en ortodoncia e implantes dentales en Biscucuy y Chabasquén, Portuguesa. Tecnología avanzada para tu sonrisa.' },
    { key: 'og:image', property: 'og:image', content: '/img/mujer-cruzando-dedos.avif' },
    { key: 'og:type', property: 'og:type', content: 'website' },
    { key: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
    { key: 'twitter:title', name: 'twitter:title', content: 'Periodent | Clínica Dental en Biscucuy y Chabasquén, Portuguesa' },
    { key: 'twitter:description', name: 'twitter:description', content: 'Primera consulta gratuita. Especialistas en ortodoncia e implantes dentales en Biscucuy y Chabasquén, Portuguesa. Tecnología avanzada para tu sonrisa.' },
    { key: 'twitter:image', name: 'twitter:image', content: '/img/mujer-cruzando-dedos.avif' }
  ]
})
</script>
