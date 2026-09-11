<template>
  <main class="about-page">
    <section class="about-hero">
      <div class="container">
        <p class="eyebrow">Especialidades Odontológicas Periodent</p>
        <h1>Atención odontológica cercana en Portuguesa</h1>
        <p class="hero-copy">Periodent ofrece orientación y atención dental para pacientes de Biscucuy, Chabasquén y comunidades cercanas.</p>
      </div>
    </section>

    <section class="about-introduction">
      <div class="container introduction-grid">
        <div>
          <h2>Quiénes somos</h2>
          <p>Somos una clínica odontológica con presencia en Biscucuy y Chabasquén, Portuguesa. Nuestro sitio reúne información sobre servicios dentales, ubicaciones, horarios y formas de contacto para que cada persona pueda solicitar una evaluación.</p>
          <p>La indicación de un tratamiento depende de la valoración presencial, los antecedentes del paciente y las condiciones clínicas de cada caso. La información publicada en este sitio es educativa y no reemplaza una consulta profesional.</p>
        </div>
        <NuxtImg src="/img/clinica-dental-biscucuy-portuguesa.avif" alt="Clínica dental Periodent en Biscucuy, Portuguesa" width="720" height="480" sizes="(max-width: 768px) 100vw, 50vw" loading="lazy" />
      </div>
    </section>

    <InfoClinica />
    <LazyNuestrosValores hydrate-on-visible />

    <section class="locations-band">
      <div class="container">
        <h2>Nuestras ubicaciones</h2>
        <div class="location-grid">
          <article v-for="location in locations" :key="location.name" class="location-item">
            <h3>{{ location.name }}</h3>
            <p>{{ location.address }}<br>{{ location.city }}</p>
            <NuxtLink :to="location.path">Ver ubicación</NuxtLink>
          </article>
        </div>
      </div>
    </section>

    <CtaFinal />
  </main>
</template>

<script setup lang="ts">
import { clinicInfo } from '@/data/clinic-info'

const locations = Object.values(clinicInfo.locations)

useHead({
  title: 'Sobre nosotros | Especialidades Odontológicas Periodent',
  meta: [
    {
      name: 'description',
      content: 'Conoce Especialidades Odontológicas Periodent, sus ubicaciones en Biscucuy y Chabasquén, sus horarios y canales de contacto.'
    }
  ]
})
</script>

<style scoped>
.about-page {
  min-height: 100vh;
  background: var(--light-bg);
}

.about-hero {
  padding: calc(var(--hero-offset) + 55px) 0 70px;
  color: var(--white);
  background: linear-gradient(135deg, var(--accent-color), var(--primary-color));
}

.eyebrow {
  margin-bottom: 14px;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.about-hero h1 {
  max-width: 760px;
  margin-bottom: 18px;
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.12;
}

.hero-copy {
  max-width: 680px;
  font-size: 1.15rem;
  line-height: 1.7;
}

.locations-band {
  padding: 70px 0;
}

.about-introduction {
  padding: 70px 0 20px;
  background: var(--white);
}

.introduction-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 0.95fr);
  gap: 52px;
  align-items: center;
}

.introduction-grid h2,
.locations-band h2 {
  margin-bottom: 20px;
  color: var(--accent-color);
}

.introduction-grid p,
.location-item p {
  line-height: 1.8;
}

.introduction-grid img {
  width: 100%;
  height: auto;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  box-shadow: var(--box-shadow);
}

.locations-band {
  background: var(--white);
}

.location-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}

.location-item {
  padding: 24px;
  border: 1px solid var(--light-gray);
}

.location-item h3 {
  margin-bottom: 10px;
  color: var(--accent-color);
}

.location-item a {
  color: var(--primary-color);
  font-weight: 600;
}

@media (max-width: 768px) {
  .introduction-grid,
  .location-grid {
    grid-template-columns: 1fr;
  }

  .about-introduction,
  .locations-band {
    padding: 48px 0;
  }
}
</style>
