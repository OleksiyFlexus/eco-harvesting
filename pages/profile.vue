<script setup lang="ts">
definePageMeta({
  layout: "dashboard-layout",
});
</script>

<template>
  <div class="profilePageContent">
    <ProfileHeader />
    <ProfileContent />
  </div>
</template>

<style scoped>
.profilePageContent {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  gap: 16px;
}

@media (max-width: 768px) {
  .profilePageContent {
    padding: 16px;
  }
}
</style>
