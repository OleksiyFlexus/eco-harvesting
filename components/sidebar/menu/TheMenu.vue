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
      <NuxtLink v-for="item in menuItems" :key="item.id" :to="item.link">
        <li>
          <component :is="item.icon" :style="{ width: '18px', height: '18px' }" />
          <div class="linkTitle">{{ item.title }}</div>
        </li>
      </NuxtLink>
    </ul>
  </nav>
</template>

<style scoped>
.menu {
  max-width: 240px;
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
.menu li .linkTitle:hover,
.menu li .linkTitle:active {
  border-radius: 6px;
  background-color: #f9fafb;
  color: #182230;
}

.linkTitle {
  color: #344054;
  display: block;
}

@media (max-width: 768px) {
  .linkTitle {
    display: none;
  }

  .menu li {
    width: 48px;
    height: 48px;
  }

  .menu,
  .menu ul {
    width: 48px;
  }
}
</style>
