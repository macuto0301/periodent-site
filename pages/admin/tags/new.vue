<template>
  <div>
    <NuxtLink to="/admin/tags/new" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'admin',
  middleware: 'admin'
});

navigateTo('/admin/tags/new');
</script>
