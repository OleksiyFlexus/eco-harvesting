<script setup lang="ts">
defineProps({
  description: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <footer class="footerContainer">
    <p>{{ description }}</p>
    <slot />
  </footer>
</template>

<style scoped>
.footerContainer {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
}
.footerContainer p {
  cursor: default;
}
</style>
