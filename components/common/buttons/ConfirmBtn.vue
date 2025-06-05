<script setup></script>

<template>
  <button class="confirmBtn">
    <slot />
  </button>
</template>

<style scoped>
.confirmBtn {
  width: 100%;
  background-color: #7f56d9;
  border: 1px solid #7f56d9;
  border-radius: 8px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  cursor: pointer;
  z-index: 1;
}

.confirmBtn:hover {
  background-color: #543694;
}
</style>
