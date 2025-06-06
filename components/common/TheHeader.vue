<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <header class="headerTextContainer">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </header>
</template>

<style scoped>
.headerTextContainer {
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
}

.headerTextContainer p {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #475467;
}
</style>
