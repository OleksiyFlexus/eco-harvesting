<script setup lang="ts">
import LogoutIcon from "@/assets/icons/Logout.svg";
</script>

<template>
  <UserImg />
  <UserName />
  <div class="logoutBtn">
    <NuxtLink to="/sign-in"
      ><TextBtn><LogoutIcon :style="{ width: '20px', height: '20px' }" /></TextBtn
    ></NuxtLink>
  </div>
</template>

<style scoped>
.logoutBtn {
  width: 100%;
  max-width: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
