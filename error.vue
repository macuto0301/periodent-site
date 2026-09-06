<template>
  <div class="error-page">
    <div class="error-container">
      <div class="error-content">
        <div class="error-code">{{ error.statusCode }}</div>
        <h1 class="error-title">Página no encontrada</h1>
        <p class="error-message">
          Parece que la página que buscas no existe o ha sido movida.
        </p>
        
        <div class="error-actions">
          <NuxtLink to="/" class="btn btn-primary">
            Volver al inicio
          </NuxtLink>
          <NuxtLink to="/servicios" class="btn btn-secondary">
            Ver servicios
          </NuxtLink>
        </div>

        <div class="error-suggestion">
          <h3>¿Necesitas ayuda?</h3>
          <p>
            Si tienes problemas para encontrar lo que buscas, puedes:
          </p>
          <ul>
            <li>
              <NuxtLink to="/">Visitar nuestro inicio</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/servicios">Explorar nuestros servicios</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/precios">Ver nuestros precios</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contacto">Contactarnos directamente</NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="error-illustration">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          class="dental-icon"
        >
          <!-- Diente sonriente -->
          <circle cx="100" cy="100" r="90" fill="#EC407A" opacity="0.1" />
          <path
            d="M 70 60 Q 70 40 100 40 Q 130 40 130 60 L 130 140 Q 130 160 100 160 Q 70 160 70 140 Z"
            fill="#EC407A"
            stroke="#EC407A"
            stroke-width="2"
          />
          <!-- Ojos -->
          <circle cx="85" cy="85" r="8" fill="#311B92" />
          <circle cx="115" cy="85" r="8" fill="#311B92" />
          <!-- Sonrisa -->
          <path
            d="M 85 110 Q 100 125 115 110"
            stroke="#311B92"
            stroke-width="3"
            fill="none"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  error: Object,
})

useHead({
  title: '404 - Página no encontrada | Periodent',
  meta: [
    {
      key: 'description',
      name: 'description',
      content: 'La página que buscas no existe. Vuelve al inicio de Periodent.',
    },
  ],
})
</script>

<style scoped>
.error-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f4f4f4 0%, #f9f9f9 100%);
  padding: 20px;
}

.error-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  max-width: 1000px;
  width: 100%;
  background: white;
  border-radius: 20px;
  padding: 60px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.error-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.error-code {
  font-size: 120px;
  font-weight: 900;
  background: linear-gradient(135deg, #EC407A 0%, #311B92 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin: 0;
}

.error-title {
  font-size: 42px;
  color: #311B92;
  margin: 0;
  font-weight: 700;
}

.error-message {
  font-size: 18px;
  color: #8b8a8a;
  margin: 0;
  line-height: 1.6;
}

.error-actions {
  display: flex;
  gap: 15px;
  margin-top: 10px;
  flex-wrap: wrap;
}

.btn {
  padding: 12px 28px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  cursor: pointer;
  display: inline-block;
  text-align: center;
}

.btn-primary {
  background-color: #C2185B;
  color: white;
}

.btn-primary:hover {
  background-color: #d60554;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(236, 6, 106, 0.3);
}

.btn-secondary {
  background-color: transparent;
  color: #C2185B;
  border-color: #C2185B;
}

.btn-secondary:hover {
  background-color: #C2185B;
  color: white;
  transform: translateY(-2px);
}

.error-suggestion {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 2px solid #e3e3e3;
}

.error-suggestion h3 {
  color: #311B92;
  font-size: 18px;
  margin: 0 0 10px 0;
}

.error-suggestion p {
  color: #8b8a8a;
  margin: 0 0 15px 0;
  font-size: 14px;
}

.error-suggestion ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.error-suggestion li a {
  color: #C2185B;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.error-suggestion li a:hover {
  color: #9C174A;
  text-decoration: underline;
}

.error-illustration {
  display: flex;
  align-items: center;
  justify-content: center;
}

.dental-icon {
  width: 200px;
  height: 200px;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Responsive design */
@media (max-width: 768px) {
  .error-container {
    grid-template-columns: 1fr;
    padding: 40px 20px;
    gap: 30px;
  }

  .error-code {
    font-size: 80px;
  }

  .error-title {
    font-size: 32px;
  }

  .error-message {
    font-size: 16px;
  }

  .error-actions {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }

  .dental-icon {
    width: 150px;
    height: 150px;
  }
}

@media (max-width: 480px) {
  .error-container {
    padding: 30px 15px;
  }

  .error-code {
    font-size: 60px;
  }

  .error-title {
    font-size: 24px;
  }

  .error-message {
    font-size: 14px;
  }

  .error-suggestion {
    display: none;
  }
}
</style>
