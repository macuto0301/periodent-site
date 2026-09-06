<template>
  <div class="ubicacion-detail-page">
    <!-- Hero -->
    <section class="detail-hero">
      <div class="container">
        <h1>Odontólogo en Biscucuy - Periodent</h1>
        <p>Tu Odontólogo de Confianza en Biscucuy, Portuguesa - Especialidades Odontológicas</p>
      </div>
    </section>

    <!-- Información Principal -->
    <section class="detail-container">
      <div class="container">
        <div class="detail-grid">
          <!-- Información -->
          <div class="detail-info">
            <h2>¿Dónde Estamos?</h2>
            <div class="detail-address">
              <i class="fas fa-map-marker-alt"></i>
              <div>
                <p><strong>Carrera 1 Bolívar, entre calle Paez y Negro Primero</strong></p>
                <p>Al lado de la antigua Casa Blanca</p>
                <p><strong>Biscucuy, Portuguesa, Venezuela</strong></p>
              </div>
            </div>

            <div class="detail-contact">
              <h3>Contacto</h3>
              <div class="contact-item">
                <i class="fas fa-phone"></i>
                <a href="tel:+584121553598">+58 (412) 155 35 98</a>
              </div>
              <div class="contact-item">
                <i class="fas fa-envelope"></i>
                <a href="mailto:info@periodent.com.ve">info@periodent.com.ve</a>
              </div>
            </div>

            <div class="detail-hours">
              <h3>Horarios de Atención</h3>
              <div class="hours-table">
                <div class="hours-row">
                  <span>Lunes - Viernes:</span>
                  <strong>8:00 AM - 5:00 PM</strong>
                </div>
                <div class="hours-row">
                  <span>Sábado:</span>
                  <strong>9:00 AM - 1:00 PM</strong>
                </div>
                <div class="hours-row">
                  <span>Domingo:</span>
                  <strong>Cerrado</strong>
                </div>
              </div>
            </div>

            <NuxtLink to="/contacto" class="btn-book">
              Agendar Cita <i class="fas fa-calendar-check"></i>
            </NuxtLink>
          </div>

          <!-- Servicios -->
          <div class="detail-services">
            <h2>Servicios en Biscucuy</h2>
            <div class="services-list">
              <div class="service-item">
                <i class="fas fa-tooth"></i>
                <h4>Odontología General</h4>
                <p>Tratamiento de caries, limpiezas y extracciones</p>
              </div>
              <div class="service-item">
                <i class="fas fa-crown"></i>
                <h4>Ortodoncia</h4>
                <p>Brackets, alineadores invisibles y tratamientos modernos</p>
              </div>
              <div class="service-item">
                <i class="fas fa-implants"></i>
                <h4>Implantes Dentales</h4>
                <p>Solución permanente con garantía internacional</p>
              </div>
              <div class="service-item">
                <i class="fas fa-spa"></i>
                <h4>Estética Dental</h4>
                <p>Blanqueamiento, carillas y diseño de sonrisa</p>
              </div>
              <div class="service-item">
                <i class="fas fa-tooth"></i>
                <h4>Endodoncia</h4>
                <p>Tratamientos de conductos sin dolor</p>
              </div>
              <div class="service-item">
                <i class="fas fa-gum"></i>
                <h4>Periodoncia</h4>
                <p>Cuidado de encías y prevención</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Área de Cobertura -->
    <section class="coverage-section">
      <div class="container">
        <h2>Atendemos a Toda Portuguesa</h2>
        <p>Aunque estamos ubicados en Biscucuy, recibimos pacientes de toda la región:</p>
        <div class="coverage-list">
          <div class="coverage-item">Biscucuy</div>
          <div class="coverage-item">Chabásquen</div>
          <div class="coverage-item">Guanare</div>
          <div class="coverage-item">Acarigua-Araure</div>
          <div class="coverage-item">Ospino</div>
          <div class="coverage-item">Guanarito</div>
          <div class="coverage-item">San Carlos</div>
          <div class="coverage-item">Aroa</div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container">
        <h2>¿Necesitas Atención Dental en Biscucuy?</h2>
        <p>Nuestro equipo de especialistas está listo para ayudarte. Primera consulta sin costo.</p>
        <NuxtLink to="/contacto" class="btn-cta-large">
          Agendar Consulta Ahora <i class="fas fa-phone"></i>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useHead, useRequestURL, useRuntimeConfig } from '#imports'

const { public: { siteUrl } } = useRuntimeConfig()

useHead({
  title: 'Dentista en Biscucuy, Portuguesa | Periodent',
  meta: [
    { 
      key: 'description', 
      name: 'description', 
      content: 'Dentista en Biscucuy, Portuguesa, Venezuela. Periodent ofrece odontología general, ortodoncia, implantes y estética dental. Carrera 1 Bolívar. Tel: +58 (412) 155 35 98.' 
    },
    {
      key: 'keywords',
      name: 'keywords',
      content: 'odontólogo en biscucuy, dentista biscucuy, clínica dental biscucuy, ortodoncia biscucuy, implantes dentales biscucuy, periodent biscucuy, odontología portuguesa'
    },
    { key: 'og:title', property: 'og:title', content: 'Odontólogo en Biscucuy | Periodent Clínica Dental' },
    { key: 'og:description', property: 'og:description', content: 'Odontólogo en Biscucuy, Portuguesa. Especialistas en ortodoncia, implantes y servicios dentales completos.' },
    { key: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
    { key: 'twitter:title', name: 'twitter:title', content: 'Odontólogo en Biscucuy | Periodent' },
    { key: 'twitter:description', name: 'twitter:description', content: 'Odontólogo en Biscucuy, Portuguesa. Especialistas en ortodoncia, implantes y servicios dentales completos.' },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Dentist",
        "name": "Periodent Biscucuy",
        "image": `${siteUrl}/img/mujer-cruzando-dedos.avif`,
        "description": "Clínica dental especializada en ortodoncia, implantes dentales y servicios odontológicos completos en Biscucuy, Portuguesa.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Carrera 1 Bolívar, entre calle Paez y Negro Primero",
          "addressLocality": "Biscucuy",
          "addressRegion": "Portuguesa",
          "addressCountry": "VE"
        },
        "telephone": "+58 (412) 155 35 98",
        "url": `${siteUrl}/ubicacion/biscucuy`,
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "17:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "09:00",
            "closes": "13:00"
          }
        ],
        "priceRange": "$$",
        "areaServed": ["Biscucuy", "Chabásquen", "Portuguesa", "Venezuela"],
        "service": [
          {
            "@type": "Service",
            "name": "Ortodoncia",
            "description": "Tratamientos de ortodoncia con brackets y alineadores invisibles"
          },
          {
            "@type": "Service",
            "name": "Implantes Dentales",
            "description": "Colocación de implantes dentales con garantía"
          },
          {
            "@type": "Service",
            "name": "Limpieza Dental Profesional",
            "description": "Profilaxis y limpieza dental profesional"
          },
          {
            "@type": "Service",
            "name": "Estética Dental",
            "description": "Blanqueamiento y diseño de sonrisa"
          }
        ]
      })
    }
  ]
})
</script>

<style scoped>
.ubicacion-detail-page {
  background-color: var(--light-bg);
  min-height: 100vh;
}

.detail-hero {
  background: linear-gradient(135deg, var(--accent-color) 0%, var(--primary-color) 100%);
  color: var(--white);
  padding: 120px 0 60px;
  text-align: center;
  margin-top: 80px;
}

.detail-hero h1 {
  font-size: 3rem;
  margin-bottom: 15px;
  font-weight: 700;
}

.detail-hero p {
  font-size: 1.2rem;
  opacity: 0.95;
}

.detail-container {
  padding: 60px 0 80px;
}

.detail-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.detail-info {
  background: var(--white);
  padding: 40px;
  border-radius: 12px;
  box-shadow: var(--box-shadow);
}

.detail-info h2 {
  color: var(--accent-color);
  font-size: 1.8rem;
  margin-bottom: 30px;
}

.detail-address {
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
  padding: 20px;
  background: var(--light-bg);
  border-radius: 8px;
}

.detail-address i {
  color: var(--primary-color);
  font-size: 1.5rem;
  flex-shrink: 0;
}

.detail-address p {
  margin: 0;
  line-height: 1.6;
}

.detail-contact, .detail-hours {
  margin-bottom: 30px;
}

.detail-contact h3, .detail-hours h3 {
  color: var(--accent-color);
  font-size: 1.2rem;
  margin-bottom: 15px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.contact-item i {
  color: var(--primary-color);
}

.contact-item a {
  color: var(--accent-color);
  text-decoration: none;
  font-weight: 600;
}

.contact-item a:hover {
  text-decoration: underline;
}

.hours-table {
  background: var(--light-bg);
  padding: 15px;
  border-radius: 8px;
}

.hours-row {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid var(--light-gray);
}

.hours-row:last-child {
  border-bottom: none;
}

.btn-book {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--primary-color);
  color: var(--white);
  padding: 15px 30px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  margin-top: 20px;
  transition: all 0.3s ease;
}

.btn-book:hover {
  background: var(--accent-color);
  gap: 15px;
  transform: translateY(-2px);
}

.detail-services {
  background: var(--white);
  padding: 40px;
  border-radius: 12px;
  box-shadow: var(--box-shadow);
}

.detail-services h2 {
  color: var(--accent-color);
  font-size: 1.8rem;
  margin-bottom: 30px;
}

.services-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.service-item {
  padding: 20px;
  background: var(--light-bg);
  border-radius: 8px;
  border-left: 4px solid var(--primary-color);
}

.service-item i {
  color: var(--primary-color);
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.service-item h4 {
  color: var(--accent-color);
  margin-bottom: 8px;
}

.service-item p {
  margin: 0;
  color: var(--text-color);
  font-size: 0.95rem;
}

.coverage-section {
  padding: 80px 0;
  background: var(--white);
}

.coverage-section h2 {
  text-align: center;
  color: var(--accent-color);
  font-size: 2rem;
  margin-bottom: 15px;
}

.coverage-section p {
  text-align: center;
  color: var(--text-color);
  margin-bottom: 30px;
}

.coverage-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
}

.coverage-item {
  padding: 15px;
  background: var(--light-bg);
  border-radius: 8px;
  text-align: center;
  color: var(--accent-color);
  font-weight: 600;
}

.cta-section {
  padding: 80px 0;
  background: linear-gradient(135deg, var(--accent-color) 0%, var(--primary-color) 100%);
  color: var(--white);
  text-align: center;
}

.cta-section h2 {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.cta-section p {
  font-size: 1.1rem;
  margin-bottom: 30px;
  opacity: 0.95;
}

.btn-cta-large {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--white);
  color: var(--primary-color);
  padding: 18px 50px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.btn-cta-large:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

@media (max-width: 1024px) {
  .detail-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .detail-grid {
    grid-template-columns: 1fr;
  }
  
  .detail-hero h1 {
    font-size: 2rem;
  }

  .detail-hero p {
    font-size: 1rem;
  }
  
  .detail-info, .detail-services {
    padding: 25px 20px;
  }

  .detail-info h2, .detail-services h2 {
    font-size: 1.5rem;
  }

  .detail-address {
    padding: 15px;
  }

  .services-list {
    gap: 15px;
  }

  .service-item {
    padding: 15px;
  }
  
  .coverage-list {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .coverage-item {
    padding: 12px;
    font-size: 0.9rem;
  }

  .cta-section h2 {
    font-size: 1.8rem;
  }

  .cta-section p {
    font-size: 1rem;
  }

  .btn-cta-large {
    padding: 14px 35px;
    font-size: 1rem;
  }
}
</style>
