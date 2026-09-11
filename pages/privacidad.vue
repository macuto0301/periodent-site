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
          <p>En Especialidades Odontológicas Periodent CA respetamos su privacidad y protegemos los datos que nos entrega al solicitar información o una cita. Esta política explica qué datos tratamos, para qué los usamos, con quién podemos compartirlos y cómo puede ejercer sus derechos. No solicitamos datos clínicos sensibles a través del formulario web; para una evaluación médica, esos datos se recopilan directamente en la consulta y por los canales habilitados.</p>
        </div>

        <div class="privacy-section">
          <h2>2. Datos que recopilamos</h2>
          <p>Podemos recopilar, usar, almacenar y transferir diferentes tipos de datos personales sobre usted, que hemos agrupado de la siguiente manera:</p>
          <ul>
            <li><strong>Datos de contacto:</strong> nombre, teléfono, correo electrónico y sede preferida cuando los proporciona en el formulario.</li>
            <li><strong>Datos de la solicitud:</strong> servicio de interés y el contenido del mensaje que decide enviarnos.</li>
            <li><strong>Datos técnicos:</strong> dirección IP, navegador, dispositivo y datos necesarios para la seguridad y el funcionamiento del sitio.</li>
            <li><strong>Datos de salud:</strong> no pedimos historias clínicas, diagnósticos, alergias ni medicamentos en el formulario web. Evite incluirlos en el campo de mensaje.</li>
          </ul>
        </div>

        <div class="privacy-section">
          <h2>3. Cómo utilizamos sus datos personales</h2>
          <p>Utilizamos sus datos personales solo cuando la ley nos lo permite. Más comúnmente, utilizaremos sus datos personales en las siguientes circunstancias:</p>
          <ul>
            <li>Para responder su consulta y gestionar solicitudes de contacto o citas.</li>
            <li>Para proporcionar y coordinar servicios de atención dental cuando usted los solicita.</li>
            <li>Para administrar, proteger y mejorar el sitio web.</li>
            <li>Para cumplir obligaciones legales y atender solicitudes de autoridades competentes.</li>
          </ul>
        </div>

        <div class="privacy-section">
          <h2>4. Divulgación de sus datos personales</h2>
          <p>Solo compartimos la información necesaria para los fines descritos en esta política:</p>
          <ul>
            <li>El personal y los profesionales que gestionan su atención o su solicitud.</li>
            <li>Proveedores tecnológicos, de alojamiento, correo y mensajería que procesan datos por nuestra cuenta.</li>
            <li>Google y sus socios publicitarios, que pueden tratar datos de navegación para mostrar y medir publicidad, de acuerdo con sus propias políticas.</li>
            <li>Autoridades competentes cuando exista una obligación legal.</li>
          </ul>
          <p>Exigimos a todos los terceros que respeten la seguridad de sus datos personales y los traten de acuerdo con la ley.</p>
        </div>

        <div class="privacy-section">
          <h2>5. Seguridad de datos</h2>
          <p>Hemos implementado medidas de seguridad apropiadas para evitar que sus datos personales se pierdan, utilicen o accedan de manera no autorizada, se modifiquen o divulguen. Limitamos el acceso a sus datos personales a quienes tengan una necesidad comercial de conocer.</p>
        </div>

        <div class="privacy-section">
          <h2>6. Retención de datos</h2>
          <p>Conservamos los mensajes y datos de contacto solo durante el tiempo necesario para responder, gestionar la relación con usted y cumplir obligaciones legales. Los plazos pueden variar según el tipo de solicitud. Puede pedir la eliminación de sus datos cuando no exista una obligación que exija conservarlos.</p>
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
          <h2>8. Cookies, publicidad y servicios de terceros</h2>
          <p>El sitio puede utilizar cookies y tecnologías similares estrictamente necesarias para funcionar. Si mostramos publicidad mediante Google AdSense, Google y sus socios pueden usar cookies, identificadores o información de navegación para personalizar, limitar y medir anuncios según la configuración disponible en su región. La publicidad puede ser personalizada o no personalizada.</p>
          <p>Puede controlar o borrar cookies desde la configuración de su navegador y consultar las opciones de privacidad y publicidad de Google. Al continuar navegando, las tecnologías no esenciales se utilizarán únicamente cuando corresponda según la legislación aplicable y las preferencias que se le presenten.</p>
          <p>Los servicios de terceros enlazados desde este sitio, como WhatsApp, Facebook, Instagram, Google Maps o Google Fonts, tienen sus propias políticas de privacidad y condiciones.</p>
        </div>

        <div class="privacy-section">
          <h2>9. Cambios a esta política de privacidad</h2>
          <p>Cualquier cambio que podamos hacer en nuestra política de privacidad en el futuro se publicará en esta página. Consulte con frecuencia para ver si hay actualizaciones o cambios.</p>
        </div>

        <div class="privacy-section">
          <h2>10. Contacto</h2>
          <p>Si tiene alguna pregunta, desea acceder, corregir o eliminar sus datos, o quiere retirar un consentimiento, comuníquese con nosotros en:</p>
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
