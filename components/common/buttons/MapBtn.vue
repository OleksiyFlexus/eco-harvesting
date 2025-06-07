<script setup lang="ts">
const props = defineProps({
  map: {
    type: Object as PropType<L.Map>,
    required: true,
  },
});
</script>

<template>
  <button class="mapBtn">
    <slot />
  </button>
</template>

<style scoped>
.mapBtn {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #ffffffde;
  border: 2px solid rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 12;
}

@media (max-width: 768px) {
  .mapBtn {
    width: 40px;
    height: 40px;
  }
}
</style>
