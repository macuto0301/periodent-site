<template>
  <div class="blog-post-page">
    <article class="blog-post" v-if="post">
      <!-- Hero del artículo -->
      <div class="post-hero">
        <div class="container">
          <span class="post-category">{{ post.category }}</span>
          <h1 class="post-title">{{ post.title }}</h1>
          <div class="post-meta">
            <span class="post-author">
              <i class="far fa-user"></i> {{ post.author }}
            </span>
            <span class="post-date">
              <i class="far fa-calendar-alt"></i> {{ post.dateFormatted }}
            </span>
            <span class="post-review">Contenido editorial de Periodent</span>
          </div>
        </div>
      </div>

      <!-- Imagen destacada -->
      <div class="post-image-container">
        <picture>
          <source :srcset="optimizedImageSrc.replace('.png', '.avif')" type="image/avif" />
          <source :srcset="optimizedImageSrc.replace('.png', '.webp')" type="image/webp" />
          <source :srcset="optimizedImageSrc" type="image/png" />
          <img
            :src="optimizedImageSrc"
            :alt="'Imagen del post: ' + post.title"
            class="post-featured-image"
            loading="lazy"
            decoding="async"
            width="1200"
            height="450"
            @error="onImageError"
          />
        </picture>
      </div>

      <!-- Contenido -->
      <div class="post-content-wrapper">
        <div class="container">
          <p class="medical-disclaimer">Contenido informativo y educativo. No sustituye una evaluación, diagnóstico ni indicación de un profesional de la salud. Cada tratamiento depende de la valoración clínica individual.</p>
          <div class="post-content" v-html="post.content"></div>
          
          <!-- Tags -->
          <div class="post-tags" v-if="post.tags && post.tags.length">
            <strong>Etiquetas:</strong>
            <span v-for="tag in post.tags" :key="tag" class="tag">
              {{ tag }}
            </span>
          </div>

          <!-- CTA -->
          <div class="post-cta">
            <h3>¿Necesitas una consulta?</h3>
            <p>Nuestros especialistas están listos para ayudarte. Agenda tu cita hoy mismo.</p>
            <NuxtLink to="/contacto" class="btn-cta">
              Agendar Cita <i class="fas fa-arrow-right"></i>
            </NuxtLink>
          </div>

          <!-- Posts relacionados -->
          <div class="related-posts" v-if="relatedPosts.length">
            <h3>Artículos relacionados</h3>
            <div class="related-grid">
              <BlogCard 
                v-for="relatedPost in relatedPosts" 
                :key="relatedPost.id" 
                :post="relatedPost" 
              />
            </div>
          </div>

          <!-- Navegación -->
          <div class="post-navigation">
            <NuxtLink to="/blog" class="btn-back">
              <i class="fas fa-arrow-left"></i> Volver al Blog
            </NuxtLink>
          </div>
        </div>
      </div>
    </article>

    <!-- 404 si no se encuentra el post -->
    <div v-else class="post-not-found">
      <div class="container">
        <h1>Artículo no encontrado</h1>
        <p>Lo sentimos, el artículo que buscas no existe.</p>
        <NuxtLink to="/blog" class="btn-back">Volver al Blog</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>

import { computed, ref, onMounted, watch } from 'vue'
import { getPostBySlug, getRelatedPosts } from '~/content/blog-posts.js'

const route = useRoute()
const slug = computed(() => route.params.slug)

const post = computed(() => {
  const foundPost = getPostBySlug(slug.value)
  return foundPost
})

const relatedPosts = computed(() => {
  return post.value ? getRelatedPosts(slug.value, 2) : []
})

// Imagen optimizada por slug
const optimizedImageSrc = ref('')

const setOptimizedImage = () => {
  if (!post.value) return
  const slugImg = `/img/${post.value.slug}.png`
  if (typeof window !== 'undefined') {
    const img = new window.Image()
    img.onload = () => {
      optimizedImageSrc.value = slugImg
    }
    img.onerror = () => {
      optimizedImageSrc.value = post.value.image
    }
    img.src = slugImg
  } else {
    // SSR: fallback a la imagen original
    optimizedImageSrc.value = post.value.image
  }
}

const onImageError = () => {
  if (post.value && optimizedImageSrc.value !== post.value.image) {
    optimizedImageSrc.value = post.value.image
  }
}

onMounted(() => {
  setOptimizedImage()
})

watch(
  () => (post.value ? post.value.slug : null),
  () => {
    setOptimizedImage();
  }
)

// SEO
const { public: { siteUrl } } = useRuntimeConfig()

watchEffect(() => {
  if (post.value) {
    useHead({
      title: `${post.value.title} | Blog Periodent`,
      meta: [
        { name: 'description', content: post.value.excerpt },
        { property: 'og:title', content: post.value.title },
        { property: 'og:description', content: post.value.excerpt },
        { property: 'og:type', content: 'article' },
        { property: 'og:image', content: post.value.image },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: post.value.title },
        { name: 'twitter:description', content: post.value.excerpt }
      ]
    })
  }
})
</script>

<style scoped>
.blog-post-page {
  background-color: var(--light-bg);
  min-height: 100vh;
}

.post-hero {
  background: linear-gradient(135deg, var(--accent-color) 0%, var(--primary-color) 100%);
  color: var(--white);
  padding: var(--hero-offset) 0 60px;
  text-align: center;
  margin-top: 0;
}

.post-category {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  padding: 8px 20px;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 20px;
}

.post-title {
  font-size: 2.8rem;
  margin-bottom: 20px;
  line-height: 1.2;
  font-weight: 700;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.post-meta {
  display: flex;
  gap: 25px;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 1rem;
  opacity: 0.95;
}

.post-meta span {
  display: flex;
  align-items: center;
  gap: 8px;
}

.post-image-container {
  max-width: 1200px;
  margin: -40px auto 0;
  padding: 0 20px;
  position: relative;
  z-index: 1;
}

.post-featured-image {
  width: 100%;
  height: 450px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

.post-content-wrapper {
  padding: 80px 0;
}

.medical-disclaimer {
  max-width: 800px;
  margin: 0 auto 24px;
  padding: 14px 18px;
  border-left: 4px solid var(--primary-color);
  background: rgba(236, 64, 122, 0.08);
  color: var(--text-color);
  line-height: 1.6;
  font-size: 0.95rem;
}

.post-content {
  max-width: 800px;
  margin: 0 auto 60px;
  background: var(--white);
  padding: 60px;
  border-radius: 12px;
  box-shadow: var(--box-shadow);
  line-height: 1.8;
  font-size: 1.1rem;
}

.post-content :deep(h2) {
  color: var(--accent-color);
  font-size: 2rem;
  margin-top: 40px;
  margin-bottom: 20px;
  font-weight: 700;
}

.post-content :deep(h3) {
  color: var(--primary-color);
  font-size: 1.6rem;
  margin-top: 30px;
  margin-bottom: 15px;
  font-weight: 600;
}

.post-content :deep(p) {
  margin-bottom: 20px;
  color: var(--text-color);
}

.post-content :deep(ul),
.post-content :deep(ol) {
  margin-bottom: 25px;
  padding-left: 30px;
}

.post-content :deep(li) {
  margin-bottom: 12px;
}

.post-content :deep(strong) {
  color: var(--accent-color);
  font-weight: 600;
}

.post-tags {
  max-width: 800px;
  margin: 0 auto 40px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
}

.tag {
  background: var(--light-gray);
  padding: 6px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  color: var(--text-color);
}

.post-cta {
  max-width: 800px;
  margin: 0 auto 60px;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%);
  color: var(--white);
  padding: 40px;
  border-radius: 12px;
  text-align: center;
}

.post-cta h3 {
  font-size: 2rem;
  margin-bottom: 15px;
}

.post-cta p {
  font-size: 1.1rem;
  margin-bottom: 25px;
  opacity: 0.95;
}

.btn-cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--white);
  color: var(--primary-color);
  padding: 15px 35px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.btn-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  gap: 15px;
}

.related-posts {
  max-width: 1000px;
  margin: 0 auto 40px;
}

.related-posts h3 {
  font-size: 2rem;
  color: var(--accent-color);
  margin-bottom: 30px;
  text-align: center;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.post-navigation {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.btn-back {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--accent-color);
  color: var(--white);
  padding: 12px 30px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-back:hover {
  background: var(--primary-color);
  transform: translateY(-2px);
  gap: 15px;
}

.post-not-found {
  padding: 100px 0;
  text-align: center;
}

.post-not-found h1 {
  font-size: 3rem;
  color: var(--accent-color);
  margin-bottom: 20px;
}

.post-not-found p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: var(--text-color);
}

@media (max-width: 768px) {
  .post-hero {
    padding: var(--hero-offset) 0 40px;
  }
  
  .post-title {
    font-size: 1.8rem;
  }
  
  .post-featured-image {
    height: 250px;
    margin-top: -20px;
  }
  
  .post-content {
    padding: 30px 20px;
    font-size: 1rem;
  }
  
  .post-content :deep(h2) {
    font-size: 1.6rem;
  }
  
  .post-content :deep(h3) {
    font-size: 1.3rem;
  }
  
  .post-cta {
    padding: 30px 20px;
  }
  
  .post-cta h3 {
    font-size: 1.5rem;
  }
  
  .related-grid {
    grid-template-columns: 1fr;
  }
}
</style>
