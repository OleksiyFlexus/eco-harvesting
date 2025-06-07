<script setup lang="ts"></script>

<template>
  <div class="forgotPasswordContent">
    <slot />
  </div>
</template>

<style scoped>
.forgotPasswordContent {
  width: 100%;
  max-width: 360px;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
</style>
