<template>
  <div class="ubicacion-page">
    <!-- Hero -->
    <section class="ubicacion-hero">
      <div class="container">
        <h1 class="ubicacion-title">Nuestras Ubicaciones</h1>
        <p class="ubicacion-subtitle">
          Contamos con dos sucursales estratégicamente ubicadas en Portuguesa para servirte mejor
        </p>
      </div>
    </section>

    <!-- Ubicaciones -->
    <section class="ubicaciones-container">
      <div class="container">
        <div class="ubicaciones-grid">
          <!-- Biscucuy -->
          <div class="ubicacion-card">
            <div class="ubicacion-card-header">
              <i class="fas fa-map-location-dot"></i>
              <h2>Biscucuy</h2>
            </div>
            <div class="ubicacion-card-content">
              <div class="info-item">
                <i class="fas fa-location-dot"></i>
                <div>
                  <strong>Dirección:</strong>
                  <p>Carrera 1 Bolívar, entre calle Paez y Negro Primero<br>
                  Al lado de la antigua Casa Blanca<br>
                  Biscucuy, Portuguesa, Venezuela</p>
                </div>
              </div>
              
              <div class="info-item">
                <i class="fas fa-phone"></i>
                <div>
                  <strong>Teléfono:</strong>
                  <p><a href="tel:+584121553598">+58 (412) 155 35 98</a></p>
                </div>
              </div>
              
              <div class="info-item">
                <i class="fas fa-clock"></i>
                <div>
                  <strong>Horarios:</strong>
                  <p>Lunes a Viernes: 8:00 AM - 5:00 PM<br>
                  Sábados: 9:00 AM - 1:00 PM</p>
                </div>
              </div>

              <div class="info-item">
                <i class="fas fa-briefcase"></i>
                <div>
                  <strong>Servicios Disponibles:</strong>
                  <ul class="servicios-list">
                    <li>Ortodoncia</li>
                    <li>Implantes Dentales</li>
                    <li>Limpiezas Profesionales</li>
                    <li>Estética Dental</li>
                    <li>Endodoncia</li>
                  </ul>
                </div>
              </div>

              <NuxtLink to="/contacto" class="btn-cita">
                Agendar Cita en Biscucuy <i class="fas fa-arrow-right"></i>
              </NuxtLink>
            </div>
          </div>

          <!-- Chabásquen -->
          <div class="ubicacion-card">
            <div class="ubicacion-card-header">
              <i class="fas fa-map-location-dot"></i>
              <h2>Chabásquen</h2>
            </div>
            <div class="ubicacion-card-content">
              <div class="info-item">
                <i class="fas fa-location-dot"></i>
                <div>
                  <strong>Dirección:</strong>
                  <p>Avenida Sucre con Calle Cordoba y Arismendi,<br>
                  Edificio del Señor Chelopez,<br>
                  Planta baja, local 5<br>
                  Chabásquen, Portuguesa, Venezuela</p>
                </div>
              </div>
              
              <div class="info-item">
                <i class="fas fa-phone"></i>
                <div>
                  <strong>Teléfono:</strong>
                  <p><a href="tel:+584121553598">+58 (412) 155 35 98</a></p>
                </div>
              </div>
              
              <div class="info-item">
                <i class="fas fa-clock"></i>
                <div>
                  <strong>Horarios:</strong>
                  <p>Lunes a Viernes: 8:00 AM - 5:00 PM<br>
                  Sábados: 9:00 AM - 1:00 PM</p>
                </div>
              </div>

              <div class="info-item">
                <i class="fas fa-briefcase"></i>
                <div>
                  <strong>Servicios Disponibles:</strong>
                  <ul class="servicios-list">
                    <li>Ortodoncia</li>
                    <li>Implantes Dentales</li>
                    <li>Limpiezas Profesionales</li>
                    <li>Estética Dental</li>
                    <li>Endodoncia</li>
                  </ul>
                </div>
              </div>

              <NuxtLink to="/contacto" class="btn-cita">
                Agendar Cita en Chabásquen <i class="fas fa-arrow-right"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mapa conceptual -->
    <section class="ubicaciones-info">
      <div class="container">
        <h2>¿Cómo Llegar?</h2>
        <div class="info-grid">
          <div class="info-box">
            <h3>Desde Biscucuy a Chabásquen</h3>
            <p>Ambas ubicaciones están a solo 15 minutos de distancia. Si no encuentras disponibilidad en una sucursal, puedes visitarnos en la otra con la misma calidad de atención.</p>
          </div>
          <div class="info-box">
            <h3>Estacionamiento</h3>
            <p>Contamos con estacionamiento disponible en ambas ubicaciones. Ven cómodo y sin preocupaciones de dejar tu vehículo.</p>
          </div>
          <div class="info-box">
            <h3>Accesibilidad</h3>
            <p>Nuestras clínicas son accesibles para personas con movilidad reducida. Cuéntanos si necesitas asistencia especial.</p>
          </div>
          <div class="info-box">
            <h3>Primera Consulta Gratis</h3>
            <p>Agenda tu consulta inicial sin costo en la ubicación que prefieras. Evaluaremos tu caso y te daremos un presupuesto personalizado.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="ubicacion-cta">
      <div class="container">
        <h2>¿Necesitas Atención Dental?</h2>
        <p>Visítanos en cualquiera de nuestras ubicaciones y deja que nuestros especialistas cuiden de tu sonrisa</p>
        <NuxtLink to="/contacto" class="btn-primary-large">
          Agendar Cita Ahora <i class="fas fa-phone"></i>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useHead, useRequestURL, useRuntimeConfig } from '#imports'

const { public: { siteUrl } } = useRuntimeConfig()

useHead({
  title: 'Ubicaciones Periodent | Biscucuy y Chabásquen, Portuguesa',
  meta: [
    { 
      key: 'description', 
      name: 'description', 
      content: 'Visita nuestras clínicas dentales en Biscucuy o Chabásquen, Portuguesa. Especialistas en ortodoncia, implantes y servicios dentales completos.' 
    },
    { key: 'og:title', property: 'og:title', content: 'Ubicaciones Periodent | Biscucuy y Chabásquen' },
    { key: 'og:description', property: 'og:description', content: 'Dos ubicaciones estratégicas en Portuguesa para servirte mejor.' },
    { key: 'og:type', property: 'og:type', content: 'website' },
    { key: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Periodent",
        "url": siteUrl,
        "logo": `${siteUrl}/img/logo-periodent.webp`,
        "description": "Especialidades Odontológicas Periodent",
        "telephone": "+58 (412) 155 35 98",
        "areaServed": [
          "Biscucuy",
          "Chabásquen",
          "Portuguesa",
          "Venezuela"
        ],
        "address": [
          {
            "@type": "PostalAddress",
            "streetAddress": "Carrera 1 Bolívar, entre calle Paez y Negro Primero",
            "addressLocality": "Biscucuy",
            "addressRegion": "Portuguesa",
            "addressCountry": "VE",
            "name": "Periodent Biscucuy"
          },
          {
            "@type": "PostalAddress",
            "streetAddress": "Avenida Sucre con Calle Cordoba y Arismendi, Edificio del Señor Chelopez, Planta baja, local 5",
            "addressLocality": "Chabásquen",
            "addressRegion": "Portuguesa",
            "addressCountry": "VE",
            "name": "Periodent Chabásquen"
          }
        ],
        "location": [
          {
            "@type": "LocalBusiness",
            "name": "Periodent Biscucuy",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Carrera 1 Bolívar, entre calle Paez y Negro Primero",
              "addressLocality": "Biscucuy",
              "addressRegion": "Portuguesa",
              "postalCode": "",
              "addressCountry": "VE"
            },
            "telephone": "+58 (412) 155 35 98",
            "url": `${siteUrl}/ubicacion/biscucuy`
          },
          {
            "@type": "LocalBusiness",
            "name": "Periodent Chabásquen",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Avenida Sucre con Calle Cordoba y Arismendi, Edificio del Señor Chelopez, Planta baja, local 5",
              "addressLocality": "Chabásquen",
              "addressRegion": "Portuguesa",
              "postalCode": "",
              "addressCountry": "VE"
            },
            "telephone": "+58 (412) 155 35 98",
            "url": `${siteUrl}/ubicacion/chabasquen`
          }
        ]
      })
    }
  ]
})
</script>

<style scoped>
.ubicacion-page {
  background-color: var(--light-bg);
  min-height: 100vh;
}

.ubicacion-hero {
  background: linear-gradient(135deg, var(--accent-color) 0%, var(--primary-color) 100%);
  color: var(--white);
  padding: 120px 0 60px;
  text-align: center;
  margin-bottom: 60px;
  margin-top: 80px;
}

.ubicacion-title {
  font-size: 3rem;
  margin-bottom: 15px;
  font-weight: 700;
}

.ubicacion-subtitle {
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
  opacity: 0.95;
  line-height: 1.6;
}

.ubicaciones-container {
  padding: 40px 0 80px;
}

.ubicaciones-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
}

.ubicacion-card {
  background: var(--white);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.ubicacion-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.ubicacion-card-header {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%);
  color: var(--white);
  padding: 30px 20px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.ubicacion-card-header i {
  font-size: 2rem;
}

.ubicacion-card-header h2 {
  font-size: 1.8rem;
  margin: 0;
}

.ubicacion-card-content {
  padding: 30px;
}

.info-item {
  display: flex;
  gap: 15px;
  margin-bottom: 25px;
}

.info-item i {
  color: var(--primary-color);
  font-size: 1.3rem;
  flex-shrink: 0;
  margin-top: 5px;
}

.info-item strong {
  display: block;
  color: var(--accent-color);
  margin-bottom: 5px;
}

.info-item p {
  margin: 0;
  color: var(--text-color);
  line-height: 1.6;
}

.info-item a {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
}

.info-item a:hover {
  text-decoration: underline;
}

.servicios-list {
  list-style: none;
  padding: 0;
  margin: 5px 0 0 0;
}

.servicios-list li {
  padding: 5px 0;
  color: var(--text-color);
}

.servicios-list li:before {
  content: "✓ ";
  color: var(--secondary-color);
  font-weight: bold;
  margin-right: 8px;
}

.btn-cita {
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

.btn-cita:hover {
  background: var(--accent-color);
  transform: translateY(-2px);
  gap: 15px;
}

.ubicaciones-info {
  padding: 80px 0;
  background: var(--white);
}

.ubicaciones-info h2 {
  text-align: center;
  font-size: 2.5rem;
  color: var(--accent-color);
  margin-bottom: 50px;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.info-box {
  padding: 30px;
  background: var(--light-bg);
  border-radius: 12px;
  border-left: 4px solid var(--primary-color);
}

.info-box h3 {
  color: var(--accent-color);
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.info-box p {
  color: var(--text-color);
  line-height: 1.6;
  margin: 0;
}

.ubicacion-cta {
  padding: 80px 0;
  background: linear-gradient(135deg, var(--accent-color) 0%, var(--primary-color) 100%);
  color: var(--white);
  text-align: center;
}

.ubicacion-cta h2 {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.ubicacion-cta p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  opacity: 0.95;
}

.btn-primary-large {
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

.btn-primary-large:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.ubicaciones-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
}

@media (max-width: 1024px) {
  .ubicaciones-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .ubicacion-hero {
    padding: 60px 0 40px;
  }
  
  .ubicacion-title {
    font-size: 2rem;
  }
  
  .ubicaciones-grid {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  .ubicacion-card-header {
    padding: 20px;
  }

  .ubicacion-card-content {
    padding: 20px;
  }
  
  .ubicaciones-info h2 {
    font-size: 1.8rem;
    margin-bottom: 30px;
  }
  
  .ubicacion-cta h2 {
    font-size: 1.5rem;
  }

  .info-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>
