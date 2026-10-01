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
const { public: { siteUrl } } = useRuntimeConfig()
const socialImage = `${siteUrl}/img/clinica-dental-biscucuy-portuguesa.avif`

useHead({
  // SEO: titulo y descripcion principal de la home.
  title: 'Clínica dental en Biscucuy y Chabasquén | Periodent',
  meta: [
    { key: 'description', name: 'description', content: 'Clínica dental en Biscucuy y Chabasquén. Primera consulta gratuita y atención en ortodoncia, implantes y limpieza dental.' },
    { key: 'og:title', property: 'og:title', content: 'Clínica dental en Biscucuy y Chabasquén | Periodent' },
    { key: 'og:description', property: 'og:description', content: 'Clínica dental en Biscucuy y Chabasquén. Primera consulta gratuita y atención en ortodoncia, implantes y limpieza dental.' },
    { key: 'og:image', property: 'og:image', content: socialImage },
    { key: 'og:type', property: 'og:type', content: 'website' },
    { key: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
    { key: 'twitter:title', name: 'twitter:title', content: 'Clínica dental en Biscucuy y Chabasquén | Periodent' },
    { key: 'twitter:description', name: 'twitter:description', content: 'Clínica dental en Biscucuy y Chabasquén. Primera consulta gratuita y atención en ortodoncia, implantes y limpieza dental.' },
    { key: 'twitter:image', name: 'twitter:image', content: socialImage },
    { key: 'og:image:alt', property: 'og:image:alt', content: 'Clínica dental Periodent en Biscucuy y Chabasquén' },
    { key: 'twitter:image:alt', name: 'twitter:image:alt', content: 'Clínica dental Periodent en Biscucuy y Chabasquén' }
  ]
})
</script>
