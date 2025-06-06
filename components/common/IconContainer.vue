<script setup lang="ts"></script>

<template>
  <div class="iconContainer">
    <slot />
  </div>
</template>

<style scoped>
.iconContainer {
  width: 56px;
  height: 56px;
  border: 1px solid #e4e7ec;
  background-color: #ffffff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0 0 2px #e4e7ec);
}
</style>
