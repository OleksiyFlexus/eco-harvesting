<script setup>
import LogoIcon from "@/assets/icons/Logo.svg";
</script>

<template>
  <div class="registrationHeader">
    <div class="logoContainer">
      <LogoIcon :style="{ width: '128px', height: '128px' }" />
    </div>
  </div>
</template>

<style scoped>
.registrationHeader {
  position: absolute;
  top: 50px;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
}
</style>
