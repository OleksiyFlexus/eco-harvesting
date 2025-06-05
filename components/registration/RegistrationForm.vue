<script setup></script>

<template>
  <form class="signUpform">
    <slot />
  </form>
</template>

<style scoped>
.signUpform {
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
</style>
