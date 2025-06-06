<script setup lang="ts">
defineProps<{
  menuItems: {
    id: number;
    title: string;
    icon: any;
    link: string;
  }[];
}>();
</script>

<template>
  <nav class="menu">
    <ul>
      <li v-for="item in menuItems" :key="item.id">
        <component :is="item.icon" :style="{ width: '18px', height: '18px' }" />
        <NuxtLink :to="item.link">{{ item.title }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.menu {
  width: 240px;
  display: flex;
  flex-direction: column;
}

.menu li {
  width: 100%;
  height: 40px;
  padding: 11px 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
}

.menu li:hover,
.menu li a:hover,
.menu li a:active {
  border-radius: 6px;
  background-color: #f9fafb;
  color: #182230;
}

.menu li a {
  color: #344054;
}
</style>
