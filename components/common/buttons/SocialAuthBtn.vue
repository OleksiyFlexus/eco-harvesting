<script setup></script>

<template>
  <button class="socialFormButton">
    <slot />
  </button>
</template>

<style scoped>
.socialFormButton {
  width: 100%;
  border: 1px solid #d0d5dd;
  border-radius: 8px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: #344054;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  cursor: pointer;
  z-index: 1;
}

.socialFormButton:hover {
  border: 1px solid #7f56d9;
}

</style>
