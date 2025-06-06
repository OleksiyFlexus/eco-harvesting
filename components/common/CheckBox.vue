<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="checkSection">
    <input id="checkbox" type="checkbox" />
    <span class="checkmark"></span>
    <label for="checkbox">{{ label }}</label>
  </div>
</template>

<style scoped>
.checkSection input {
  width: 20px;
  height: 20px;
  min-width: auto;
}

.checkSection {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
