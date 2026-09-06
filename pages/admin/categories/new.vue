<template>
  <div>
    <NuxtLink to="/admin/categories/new" />
  </div>
</template>

<script setup>
// Redirigir a la página dinémica con parámetro "new"
definePageMeta({
  layout: 'admin',
  middleware: 'admin'
});

navigateTo('/admin/categories/new');
</script>
