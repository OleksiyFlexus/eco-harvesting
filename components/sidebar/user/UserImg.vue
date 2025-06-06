<script setup lang="ts">
import AvatarIcon from "@/assets/icons/Avatar.svg";
</script>

<template>
  <div class="userImg">
    <AvatarIcon :style="{ width: '30px', height: '30px' }" />
  </div>
</template>

<style scoped>
.userImg {
  width: 100%;
  max-width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #e4e7ec;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
