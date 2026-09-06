<template>
  <div class="privacidad">
    <section class="page-header">
      <div class="header-content">
        <NuxtImg src="/img/privacidad-header.webp" alt="Política de privacidad" format="webp" loading="lazy" sizes="600px" class="header-image" />
      </div>
    </section>

    <section class="privacy-content">
      <div class="container">
        <h1>Política de Privacidad</h1>
        <p class="last-updated">Última actualización: {{ lastUpdated }}</p>

        <div class="privacy-section">
          <h2>1. Introducción</h2>
          <p>En Especialidades Odontológicas Periodent CA, respetamos su privacidad y nos comprometemos a proteger sus datos personales. Esta política de privacidad le informará sobre cómo cuidamos sus datos personales cuando visita nuestro sitio web y le informará sobre sus derechos de privacidad y cómo la ley lo protege.</p>
        </div>

        <div class="privacy-section">
          <h2>2. Datos que recopilamos</h2>
          <p>Podemos recopilar, usar, almacenar y transferir diferentes tipos de datos personales sobre usted, que hemos agrupado de la siguiente manera:</p>
          <ul>
            <li><strong>Datos de identidad:</strong> incluye nombre, apellido y fecha de nacimiento.</li>
            <li><strong>Datos de contacto:</strong> incluye dirección, correo electrónico y números de teléfono.</li>
            <li><strong>Datos de salud:</strong> incluye historial médico, alergias, medicamentos actuales y condiciones de salud relevantes para su tratamiento dental.</li>
            <li><strong>Datos técnicos:</strong> incluye dirección IP, datos de inicio de sesión, navegador, zona horaria, plugins, sistema operativo y plataforma.</li>
          </ul>
        </div>

        <div class="privacy-section">
          <h2>3. Cómo utilizamos sus datos personales</h2>
          <p>Utilizamos sus datos personales solo cuando la ley nos lo permite. Más comúnmente, utilizaremos sus datos personales en las siguientes circunstancias:</p>
          <ul>
            <li>Para registrarlo como paciente nuevo.</li>
            <li>Para proporcionar servicios de atención dental.</li>
            <li>Para gestionar su relación con nosotros.</li>
            <li>Para procesar y entregar su solicitud de cita.</li>
            <li>Para administrar y proteger nuestro negocio y este sitio web.</li>
            <li>Para hacer sugerencias y recomendaciones sobre servicios que puedan interesarle.</li>
          </ul>
        </div>

        <div class="privacy-section">
          <h2>4. Divulgación de sus datos personales</h2>
          <p>Podemos compartir sus datos personales con las partes que se indican a continuación para los fines establecidos en esta política de privacidad:</p>
          <ul>
            <li>Profesionales de la salud que forman parte de su equipo de atención.</li>
            <li>Proveedores de servicios que realizan servicios y funciones a nuestro nombre.</li>
            <li>Autoridades fiscales, reguladoras u otras autoridades cuando sea necesario.</li>
          </ul>
          <p>Exigimos a todos los terceros que respeten la seguridad de sus datos personales y los traten de acuerdo con la ley.</p>
        </div>

        <div class="privacy-section">
          <h2>5. Seguridad de datos</h2>
          <p>Hemos implementado medidas de seguridad apropiadas para evitar que sus datos personales se pierdan, utilicen o accedan de manera no autorizada, se modifiquen o divulguen. Limitamos el acceso a sus datos personales a quienes tengan una necesidad comercial de conocer.</p>
        </div>

        <div class="privacy-section">
          <h2>6. Retención de datos</h2>
          <p>Solo conservaremos sus datos personales durante el tiempo que sea necesario para cumplir con los fines para los que los recopilamos, incluso para satisfacer cualquier requisito legal, contable o de informes.</p>
        </div>

        <div class="privacy-section">
          <h2>7. Sus derechos legales</h2>
          <p>Bajo ciertas circunstancias, tiene derechos bajo las leyes de protección de datos en relación con sus datos personales, que incluyen:</p>
          <ul>
            <li>Solicitar acceso a sus datos personales.</li>
            <li>Solicitar la corrección de sus datos personales.</li>
            <li>Solicitar la eliminación de sus datos personales.</li>
            <li>Oponerse al procesamiento de sus datos personales.</li>
            <li>Solicitar la restricción del procesamiento de sus datos personales.</li>
            <li>Solicitar la transferencia de sus datos personales.</li>
            <li>Derecho a retirar el consentimiento.</li>
          </ul>
        </div>

        <div class="privacy-section">
          <h2>8. Cookies</h2>
          <p>Nuestro sitio web utiliza cookies para distinguirlo de otros usuarios. Esto nos ayuda a brindarle una buena experiencia cuando navega por nuestro sitio web y también nos permite mejorarlo.</p>
        </div>

        <div class="privacy-section">
          <h2>9. Cambios a esta política de privacidad</h2>
          <p>Cualquier cambio que podamos hacer en nuestra política de privacidad en el futuro se publicará en esta página. Consulte con frecuencia para ver si hay actualizaciones o cambios.</p>
        </div>

        <div class="privacy-section">
          <h2>10. Contacto</h2>
          <p>Si tiene alguna pregunta sobre esta política de privacidad o nuestras prácticas de privacidad, comuníquese con nosotros en:</p>
          <p>Especialidades Odontológicas Periodent CA<br>
            Carrera 1 Bolivar, entre calle Paez y Negro Primero<br>
            Biscucuy, Portuguesa, Venezuela<br>
            Teléfono: +58 (412) 155 35 98<br>
            Correo electrónico: info@periodent.com.ve</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const lastUpdated = new Date().toLocaleDateString('es-ES', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})

useHead({
  title: 'Política de Privacidad | Especialidades Odontológicas Periodent',
  meta: [
    { key: 'description', name: 'description', content: 'Lee nuestra política de privacidad y conoce cómo protegemos tus datos personales en Especialidades Odontológicas Periodent.' },
    { key: 'og:title', property: 'og:title', content: 'Política de Privacidad | Especialidades Odontológicas Periodent' },
    { key: 'og:description', property: 'og:description', content: 'Lee nuestra política de privacidad y conoce cómo protegemos tus datos personales en Especialidades Odontológicas Periodent.' },
    { key: 'og:image', property: 'og:image', content: '/img/mujer-cruzando-dedos.avif' },
    { key: 'og:type', property: 'og:type', content: 'website' },
    { key: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
    { key: 'twitter:title', name: 'twitter:title', content: 'Política de Privacidad | Especialidades Odontológicas Periodent' },
    { key: 'twitter:description', name: 'twitter:description', content: 'Lee nuestra política de privacidad y conoce cómo protegemos tus datos personales en Especialidades Odontológicas Periodent.' },
    { key: 'twitter:image', name: 'twitter:image', content: '/img/mujer-cruzando-dedos.avif' }
  ]
})
</script>

<style scoped>
.privacidad {
  min-height: 100vh;
}

.page-header {
  margin-top: 0;
  padding-top: 0;
}

.header-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.header-image {
  width: 100%;
  height: 300px;
  box-shadow: var(--box-shadow);
  object-fit: cover;
}

.privacy-content {
  padding: 100px 0;
  background-color: var(--white);
}

.privacy-content h1 {
  color: var(--accent-color);
  font-size: 2.2rem;
  margin-bottom: 10px;
  text-align: center;
}

.last-updated {
  text-align: center;
  color: var(--dark-gray);
  margin-bottom: 40px;
  font-style: italic;
}

.privacy-section {
  margin-bottom: 30px;
}

.privacy-section h2 {
  color: var(--primary-color);
  font-size: 1.5rem;
  margin-bottom: 15px;
  border-bottom: 1px solid var(--light-gray);
  padding-bottom: 10px;
}

.privacy-section p {
  margin-bottom: 15px;
  line-height: 1.7;
}

.privacy-section ul {
  margin-left: 20px;
  margin-bottom: 15px;
}

.privacy-section li {
  margin-bottom: 8px;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .header-image {
    height: 200px;
  }

  .privacy-content h1 {
    font-size: 1.8rem;
  }

  .privacy-section h2 {
    font-size: 1.3rem;
  }
}
</style>
