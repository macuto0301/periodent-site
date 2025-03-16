<template>
  <div id="app">
    <HeaderComponent />
    <router-view />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '@/components/layout/HeaderComponent.vue'
import FooterComponent from '@/components/layout/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>