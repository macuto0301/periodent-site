<template>
  <main class="about-page">
    <section class="about-hero">
      <div class="container">
        <p class="eyebrow">Especialidades Odontológicas Periodent</p>
        <h1>Atención odontológica cercana en Portuguesa</h1>
        <p class="hero-copy">Periodent ofrece orientación y atención dental para pacientes de Biscucuy, Chabasquén y comunidades cercanas.</p>
      </div>
    </section>

    <section class="about-content">
      <div class="container about-grid">
        <article>
          <h2>Quiénes somos</h2>
          <p>Somos una clínica odontológica con presencia en Biscucuy y Chabasquén, Portuguesa. Nuestro sitio reúne información sobre servicios dentales, ubicaciones, horarios y formas de contacto para que cada persona pueda solicitar una evaluación.</p>
          <p>La indicación de un tratamiento depende de la valoración presencial, los antecedentes del paciente y las condiciones clínicas de cada caso. La información publicada en este sitio es educativa y no reemplaza una consulta profesional.</p>
        </article>

        <aside class="about-contact">
          <h2>Información de contacto</h2>
          <p><strong>Teléfono:</strong> <a :href="clinicInfo.phoneHref">{{ clinicInfo.phone }}</a></p>
          <p><strong>Correo:</strong> <a href="mailto:info@periodent.com.ve">info@periodent.com.ve</a></p>
          <p><strong>Horario:</strong><br>{{ clinicInfo.hours.weekdays }}<br>{{ clinicInfo.hours.saturday }}<br>{{ clinicInfo.hours.sunday }}</p>
          <NuxtLink to="/contacto" class="about-button">Solicitar información</NuxtLink>
        </aside>
      </div>
    </section>

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

.about-content,
.locations-band {
  padding: 70px 0;
}

.about-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(280px, 0.8fr);
  gap: 48px;
}

.about-grid h2,
.locations-band h2 {
  margin-bottom: 20px;
  color: var(--accent-color);
}

.about-grid p,
.location-item p {
  line-height: 1.8;
}

.about-contact {
  padding: 28px;
  background: var(--white);
  border-top: 4px solid var(--primary-color);
  box-shadow: var(--box-shadow);
}

.about-contact p {
  margin-bottom: 14px;
  line-height: 1.6;
}

.about-contact a,
.location-item a {
  color: var(--primary-color);
  font-weight: 600;
}

.about-button {
  display: inline-block;
  margin-top: 12px;
  padding: 12px 18px;
  color: var(--white) !important;
  background: var(--primary-color);
  text-decoration: none;
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

@media (max-width: 768px) {
  .about-grid,
  .location-grid {
    grid-template-columns: 1fr;
  }

  .about-content,
  .locations-band {
    padding: 48px 0;
  }
}
</style>
