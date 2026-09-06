<template>
  <div class="faq-page">
    <div class="faq-hero">
      <div class="container">
        <h1>Preguntas Frecuentes</h1>
        <p>Encuentra respuestas a las dudas más comunes sobre nuestros servicios dentales</p>
      </div>
    </div>

    <div class="faq-content">
      <div class="container">
        <div class="faq-intro">
          <p>En <strong>Periodent</strong>, sabemos que visitar al dentista puede generar dudas. Aquí respondemos las preguntas más frecuentes de nuestros pacientes en Biscucuy y Chabasquén.</p>
        </div>

        <div class="faq-list">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index" 
            class="faq-item"
            :class="{ 'active': activeIndex === index }"
          >
            <button 
              class="faq-question" 
              @click="toggleFaq(index)"
            >
              <span>{{ faq.question }}</span>
              <i class="fas" :class="activeIndex === index ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
            </button>
            <div class="faq-answer" v-show="activeIndex === index">
              <p v-html="faq.answer"></p>
            </div>
          </div>
        </div>

        <div class="faq-cta">
          <h3>¿No encontraste tu respuesta?</h3>
          <p>Contáctanos y con gusto resolveremos tus dudas</p>
          <NuxtLink to="/contacto" class="btn-cta">
            Contactar <i class="fas fa-arrow-right"></i>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref(null)

const faqs = ref([
  {
    question: "¿Cuánto cuesta una limpieza dental en Periodent?",
    answer: "El costo de una limpieza dental profesional varía según las necesidades de cada paciente. En general, nuestras limpiezas tienen precios competitivos en Biscucuy y Chabasquén. Te recomendamos agendar una evaluación inicial donde te daremos un presupuesto personalizado."
  },
  {
    question: "¿Cada cuánto tiempo debo hacerme una limpieza dental?",
    answer: "Se recomienda realizar una limpieza dental profesional cada 6 meses para mantener una óptima salud bucal. Sin embargo, si tienes enfermedad periodontal o eres propenso a acumular sarro, tu dentista podría recomendarte limpiezas cada 3-4 meses."
  },
  {
    question: "¿Aceptan seguros dentales?",
    answer: "Aceptamos diversos seguros dentales. Te recomendamos contactarnos directamente para verificar si trabajamos con tu aseguradora específica y conocer la cobertura de tu plan."
  },
  {
    question: "¿Ofrecen planes de financiamiento?",
    answer: "Sí, ofrecemos planes de financiamiento flexibles para tratamientos de mayor costo. Contamos con opciones de pago en cuotas para que puedas acceder al tratamiento que necesitas sin afectar tu presupuesto."
  },
  {
    question: "¿Necesito cita previa o atienden por orden de llegada?",
    answer: "Trabajamos con sistema de citas previas para garantizar que recibas atención personalizada sin largas esperas. Puedes agendar tu cita llamando al +58 (412) 155 35 98 o a través de WhatsApp."
  },
  {
    question: "¿Qué medidas de bioseguridad implementan?",
    answer: "Implementamos estrictos protocolos de bioseguridad: esterilización de todo el instrumental, uso de material desechable cuando corresponde, desinfección de áreas después de cada paciente, y uso de equipos de protección personal por parte de todo nuestro equipo."
  },
  {
    question: "¿Atienden emergencias dentales?",
    answer: "Sí, atendemos emergencias dentales. Si tienes dolor intenso, trauma dental o cualquier urgencia, contáctanos de inmediato. Hacemos todo lo posible por atenderte el mismo día en casos de emergencia."
  },
  {
    question: "¿Tienen servicio de ortodoncia?",
    answer: "Sí, ofrecemos servicios de ortodoncia con brackets metálicos y estéticos. En tu primera consulta, evaluaremos tu caso y te presentaremos las mejores opciones de tratamiento según tus necesidades."
  },
  {
    question: "¿Realizan implantes dentales?",
    answer: "Sí, realizamos implantes dentales utilizando tecnología de última generación. Los implantes son una excelente solución permanente para reemplazar dientes perdidos. Agenda una evaluación para conocer si eres candidato para este tratamiento."
  },
  {
    question: "¿Cuál es la diferencia entre sus dos ubicaciones?",
    answer: "Contamos con dos clínicas: una en <strong>Biscucuy, Portuguesa</strong> (Carrera 1 Bolívar, entre calle Paez y Negro Primero, Biscucuy, Portuguesa, Venezuela) y otra en <strong>Chabasquén, Portuguesa</strong> (Avenida Sucre con Calle Cordoba y Arismendi, Edificio del Senor Chelopez, planta baja Local 5, Chabasquén, Portuguesa, Venezuela). Ambas ofrecen los mismos servicios y cuentan con equipamiento de última tecnología."
  },
  {
    question: "¿Atienden niños?",
    answer: "Sí, ofrecemos odontopediatría. Nuestro equipo está capacitado para atender a niños con paciencia y técnicas especiales que hacen la experiencia dental más agradable. Es importante iniciar las visitas dentales desde temprana edad."
  },
  {
    question: "¿Cuánto tiempo dura un tratamiento de ortodoncia?",
    answer: "La duración del tratamiento de ortodoncia varía según cada caso, pero generalmente oscila entre 18 y 24 meses. En tu consulta inicial, te daremos un estimado más preciso basado en tu situación específica."
  },
  {
    question: "¿El blanqueamiento dental daña los dientes?",
    answer: "No, el blanqueamiento dental profesional realizado por odontólogos es seguro y no daña el esmalte dental cuando se siguen las indicaciones correctas. Utilizamos productos profesionales de alta calidad que garantizan resultados sin riesgos."
  },
  {
    question: "¿Qué debo hacer si se me cae una corona o empaste?",
    answer: "Si se te cae una corona o empaste, contáctanos inmediatamente para agendar una cita de emergencia. Mientras tanto, evita masticar con ese diente y mantén la zona limpia. Si es posible, guarda la corona en un lugar seguro."
  },
  {
    question: "¿Ofrecen radiografías digitales?",
    answer: "Sí, contamos con tecnología de radiografía digital que nos permite obtener imágenes precisas con menor exposición a radiación. Esto nos ayuda a diagnosticar con mayor exactitud y planificar mejor los tratamientos."
  }
])

function toggleFaq(index) {
  activeIndex.value = activeIndex.value === index ? null : index
}

// SEO
useHead({
  title: 'Preguntas Frecuentes | Periodent - Clínica Dental en Biscucuy y Chabasquén',
  meta: [
    { 
      name: 'description', 
      content: 'Respuestas a las preguntas más frecuentes sobre servicios dentales en Periodent. Costos, citas, tratamientos y más información sobre nuestras clínicas en Biscucuy y Chabasquén, Portuguesa.'
    },
    { property: 'og:title', content: 'Preguntas Frecuentes | Periodent' },
    { property: 'og:description', content: 'Encuentra respuestas a tus dudas sobre servicios dentales, costos, citas y tratamientos en Periodent.' },
    { property: 'og:type', content: 'website' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.value.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer.replace(/<[^>]*>/g, '')
          }
        }))
      })
    }
  ]
})
</script>

<style scoped>
.faq-page {
  background-color: var(--light-bg);
  min-height: 100vh;
}

.faq-hero {
  background: linear-gradient(135deg, var(--accent-color) 0%, var(--primary-color) 100%);
  color: var(--white);
  padding: var(--hero-offset) 0 60px;
  text-align: center;
  margin-top: 0px;
  margin-bottom: 60px;
}

.faq-hero h1 {
  font-size: 3rem;
  margin-bottom: 15px;
  font-weight: 700;
}

.faq-hero p {
  font-size: 1.2rem;
  opacity: 0.95;
}

.faq-content {
  padding: 0 0 80px;
}

.faq-intro {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 50px;
  font-size: 1.1rem;
  color: var(--text-color);
  line-height: 1.7;
}

.faq-list {
  max-width: 900px;
  margin: 0 auto 60px;
}

.faq-item {
  background: white;
  border-radius: 12px;
  margin-bottom: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: box-shadow 0.3s ease;
}

.faq-item:hover {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12);
}

.faq-item.active {
  box-shadow: 0 4px 20px rgba(236, 6, 106, 0.15);
}

.faq-question {
  width: 100%;
  padding: 20px 25px;
  background: none;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  text-align: left;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-color);
  transition: color 0.3s ease;
}

.faq-question:hover {
  color: var(--primary-color);
}

.faq-item.active .faq-question {
  color: var(--primary-color);
}

.faq-question i {
  font-size: 1rem;
  color: var(--primary-color);
  transition: transform 0.3s ease;
}

.faq-answer {
  padding: 0 25px 20px;
  color: var(--text-color);
  line-height: 1.7;
  font-size: 1rem;
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.faq-cta {
  text-align: center;
  padding: 50px 30px;
  background: linear-gradient(135deg, rgba(19, 6, 99, 0.05) 0%, rgba(236, 6, 106, 0.05) 100%);
  border-radius: 16px;
  max-width: 700px;
  margin: 0 auto;
}

.faq-cta h3 {
  font-size: 2rem;
  color: var(--accent-color);
  margin-bottom: 15px;
}

.faq-cta p {
  font-size: 1.1rem;
  color: var(--text-color);
  margin-bottom: 25px;
}

.btn-cta {
  display: inline-block;
  background: var(--primary-color);
  color: white;
  padding: 15px 35px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(236, 6, 106, 0.3);
}

.btn-cta:hover {
  background: var(--accent-color);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(236, 6, 106, 0.4);
}

.btn-cta i {
  margin-left: 10px;
}

@media (max-width: 768px) {
  .faq-hero {
    padding: var(--hero-offset) 20px 40px;
    margin-bottom: 40px;
  }

  .faq-hero h1 {
    font-size: 2rem;
  }

  .faq-hero p {
    font-size: 1rem;
  }

  .faq-intro {
    font-size: 1rem;
    padding: 0 20px;
    margin-bottom: 30px;
  }

  .faq-list {
    padding: 0 15px;
  }

  .faq-question {
    font-size: 1rem;
    padding: 15px 20px;
  }

  .faq-answer {
    font-size: 0.95rem;
    padding: 0 20px 15px;
  }

  .faq-cta {
    padding: 30px 20px;
  }

  .faq-cta h3 {
    font-size: 1.5rem;
  }

  .faq-cta p {
    font-size: 1rem;
  }
}
</style>
