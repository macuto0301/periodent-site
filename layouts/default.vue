<template>
  <div>
    <HeaderComponent />
    <NavigationComponent />
    <slot />
    <LazyFooterComponent hydrate-on-visible />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useHead, useRoute, useRuntimeConfig } from '#imports'
import { clinicInfo } from '@/data/clinic-info'

const route = useRoute()
const { public: { siteUrl } } = useRuntimeConfig()
// Self-referencing canonical (no trailing slash) so Google always finds a declared canonical per page.
const canonicalUrl = computed(() => {
  const path = route.path === '/' ? '' : route.path.replace(/\/+$/, '')
  return `${siteUrl}${path}`
})

useHead({
  link: [
    { rel: 'canonical', href: canonicalUrl }
  ],
  meta: [
    { key: 'og:url', property: 'og:url', content: canonicalUrl }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "DentalClinic",
        "name": "Especialidades Odontológicas Periodent",
        "image": [
          "https://periodent.com.ve/img/clinica-dental-biscucuy-portuguesa.avif",
          "https://periodent.com.ve/img/clinica-dental-chabasquen-portuguesa.avif"
        ],
        "telephone": clinicInfo.phone,
        "url": "https://periodent.com.ve",
        "address": [
          {
            "@type": "PostalAddress",
            "streetAddress": clinicInfo.locations.biscucuy.address,
            "addressLocality": clinicInfo.locations.biscucuy.name,
            "addressRegion": "Portuguesa",
            "postalCode": "3351",
            "addressCountry": "VE"
          },
          {
            "@type": "PostalAddress",
            "streetAddress": clinicInfo.locations.chabasquen.address,
            "addressLocality": clinicInfo.locations.chabasquen.name,
            "addressRegion": "Portuguesa",
            "postalCode": "3353",
            "addressCountry": "VE"
          }
        ],
        "openingHours": [
          "Mo-Fr 08:00-17:00",
          "Sa 08:00-12:00"
        ],
        "medicalSpecialty": [
          "Dentistry",
          "Orthodontics",
          "Implantology",
          "PediatricDentistry"
        ],
        "service": [
          "Ortodoncia",
          "Implantes dentales",
          "Limpieza dental",
          "Estética dental",
          "Endodoncia",
          "Periodoncia"
        ]
      })
    }
  ]
})
// Components are auto-imported
</script>