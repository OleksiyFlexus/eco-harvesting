<script setup lang="ts">
import BurgerMenuIcon from "@/assets/icons/BurgerMenu.svg";

const emit = defineEmits<{ toggleMenu: () => void }>();
</script>

<template>
  <button class="burger" @click="emit('toggleMenu')">
    <BurgerMenuIcon :style="{ width: '48px', height: '48px' }" />
  </button>
</template>

<style scoped>
.burger {
  display: none;
  z-index: 1001;
  background: none;
  border: none;
  font-size: 32px;
  cursor: pointer;
}
</style>
