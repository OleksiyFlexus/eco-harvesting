<script setup></script>

<template>
  <button class="changeLoginBtn"><slot /></button>
</template>

<style scoped>
.changeLoginBtn {
  border: none;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: #475467;
  transition: all 0.4s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.changeLoginBtn:hover {
  color: #7f56d9;
}
</style>
