<script setup lang="ts"></script>

<template>
  <button class="forgotPassBtn"><slot /></button>
</template>

<style scoped>
.forgotPassBtn {
  border: none;
  height: 18px;
  color: #475467;
  font-size: 16px;
}

.forgotPassBtn:hover {
  color: #7f56d9;
}
</style>
