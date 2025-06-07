<script setup>
const props = defineProps({
  description: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="registrationHeader">
    <div class="logoContainer">
      <slot />
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>
.registrationHeader {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
}

.logoContainer {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
