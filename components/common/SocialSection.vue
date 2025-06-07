<script setup lang="ts">
defineProps<{
  buttons: {
    id: number;
    name: string;
    icon: any;
    title: string;
  }[];
}>();
</script>

<template>
  <div class="socialButtonsSection">
    <SocialAuthBtn v-for="btn in buttons" :key="btn.id" :title="btn.title">
      <component :is="btn.icon" class="socialIcon" />
      {{ btn.title }}
    </SocialAuthBtn>
  </div>
</template>

<style scoped>
.socialButtonsSection {
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 16px;
}

.socialIcon {
  width: 24px;
  height: 24px;
}
</style>
