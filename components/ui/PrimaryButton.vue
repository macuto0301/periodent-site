<template>
  <NuxtLink
    v-if="to || href"
    :to="to || href"
    class="primary-btn"
    :class="[color, { 'full': fullWidth }]"
    @click="$emit('click', $event)"
  >
    <slot />
  </NuxtLink>
  <button
    v-else
    :type="type"
    class="primary-btn"
    :class="[color, { 'full': fullWidth }]"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>


<script setup>
import { NuxtLink } from '#components'
defineProps({
  type: { type: String, default: 'button' },
  color: { type: String, default: '' },
  fullWidth: { type: Boolean, default: false },
  to: { type: String, default: '' },
  href: { type: String, default: '' }
})
</script>


<style scoped>
.primary-btn {
    background: var(--primary-color);
  color: var(--white);
  font-weight: 700;
  padding: 0.85rem 1.8rem;
  border-radius: 10px;
  text-decoration: none;
  font-size: 1.1rem;
  box-shadow: 0 4px 24px #0003;
  transition: background 0.2s, transform 0.2s;
  border: none;
  outline: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  text-align: center;
}
.primary-btn:hover {
  background: var(--primary-strong, #4A148C);
  transform: translateY(-2px) scale(1.04);
}
.primary-btn.full {
  width: 100%;
}
</style>
