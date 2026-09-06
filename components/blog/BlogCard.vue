<template>
  <article class="blog-card">
    <NuxtLink :to="`/blog/${post.slug}`" class="blog-card-link">
      <div class="blog-card-image">
        <picture>
          <source :srcset="optimizedImageSrc.replace('.png', '.avif')" type="image/avif" />
          <source :srcset="optimizedImageSrc.replace('.png', '.webp')" type="image/webp" />
          <source :srcset="optimizedImageSrc" type="image/png" />
          <img
            :src="optimizedImageSrc"
            :alt="'Imagen del post: ' + post.title"
            loading="lazy"
            decoding="async"
            width="400"
            height="240"
            @error="onImageError"
          />
        </picture>
        <span class="blog-card-category">{{ post.category }}</span>
      </div>
      <div class="blog-card-content">
        <div class="blog-card-meta">
          <span class="blog-card-date">
            <i class="far fa-calendar-alt"></i> {{ post.dateFormatted }}
          </span>
          <span class="blog-card-author">
            <i class="far fa-user"></i> {{ post.author }}
          </span>
        </div>
        <h3 class="blog-card-title">{{ post.title }}</h3>
        <p class="blog-card-excerpt">{{ post.excerpt }}</p>
        <span class="blog-card-read-more">
          Leer más <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </NuxtLink>
  </article>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  post: {
    type: Object,
    required: true
  }
})

const optimizedImageSrc = ref(props.post.image)

const setOptimizedImage = () => {
  if (!props.post) return
  const slugImg = `/img/${props.post.slug}.png`
  // Solo ejecutar en cliente
  if (typeof window !== 'undefined') {
    const img = new window.Image()
    img.onload = () => {
      optimizedImageSrc.value = slugImg
    }
    img.onerror = () => {
      optimizedImageSrc.value = props.post.image
    }
    img.src = slugImg
  }
}

const onImageError = () => {
  if (props.post && optimizedImageSrc.value !== props.post.image) {
    optimizedImageSrc.value = props.post.image
  }
}

onMounted(() => {
  setOptimizedImage()
})

watch(() => props.post.slug, () => {
  optimizedImageSrc.value = props.post.image
  setOptimizedImage()
})
</script>

<style scoped>
.blog-card {
  background: var(--white);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.blog-card-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.blog-card-image {
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;
}

.blog-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.blog-card:hover .blog-card-image img {
  transform: scale(1.05);
}

.blog-card-category {
  position: absolute;
  top: 15px;
  left: 15px;
  background: var(--primary-color);
  color: var(--white);
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.blog-card-content {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.blog-card-meta {
  display: flex;
  gap: 15px;
  margin-bottom: 12px;
  flex-wrap: wrap;
  font-size: 0.85rem;
  color: var(--dark-gray);
}

.blog-card-meta span {
  display: flex;
  align-items: center;
  gap: 5px;
}

.blog-card-meta i {
  color: var(--primary-color);
}

.blog-card-title {
  font-size: 1.4rem;
  margin-bottom: 12px;
  color: var(--accent-color);
  line-height: 1.3;
  font-weight: 600;
}

.blog-card-excerpt {
  color: var(--text-color);
  line-height: 1.6;
  margin-bottom: 15px;
  flex: 1;
}

.blog-card-read-more {
  color: var(--primary-color);
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: gap 0.3s ease;
}

.blog-card:hover .blog-card-read-more {
  gap: 12px;
}

@media (max-width: 768px) {
  .blog-card-image {
    height: 200px;
  }
  
  .blog-card-title {
    font-size: 1.2rem;
  }
}
</style>
