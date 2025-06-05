<script setup></script>

<template>
  <button class="changeLoginBtn"><slot /></button>
</template>

<style scoped>
.changeLoginBtn {
  border: none;
  width: auto;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: #475467;
  transition: all 0.4s ease;
}

.changeLoginBtn:hover {
  color: #7f56d9;
}
</style>
