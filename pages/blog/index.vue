<template>
  <div class="blog-page">
    <BlogHero />
    
    <section class="blog-content">
      <div class="container">
        <div class="blog-grid">
          <BlogCard 
            v-for="post in posts" 
            :key="post.id" 
            :post="post" 
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { getAllPosts } from '~/content/blog-posts.js'

const posts = getAllPosts()

useHead({
  title: 'Blog de Salud Dental | Periodent',
  meta: [
    { key: 'description', name: 'description', content: 'Lee nuestros artículos sobre salud dental, ortodoncia, implantes y cuidado bucal. Consejos de expertos para mantener tu sonrisa perfecta.' },
    { key: 'og:title', property: 'og:title', content: 'Blog de Salud Dental | Periodent' },
    { key: 'og:description', property: 'og:description', content: 'Lee nuestros artículos sobre salud dental, ortodoncia, implantes y cuidado bucal. Consejos de expertos para mantener tu sonrisa perfecta.' },
    { key: 'og:type', property: 'og:type', content: 'website' },
    { key: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
    { key: 'twitter:title', name: 'twitter:title', content: 'Blog de Salud Dental | Periodent' },
    { key: 'twitter:description', name: 'twitter:description', content: 'Lee nuestros artículos sobre salud dental, ortodoncia, implantes y cuidado bucal.' }
  ]
})
</script>

<style scoped>
.blog-page {
  background-color: var(--light-bg);
  min-height: 100vh;
}

.blog-content {
  padding: 40px 0 80px;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
}

@media (max-width: 768px) {
  .blog-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .blog-content {
    padding: 30px 0 60px;
  }
}
</style>
