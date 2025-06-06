<script setup lang="ts"></script>

<template>
  <div class="authContainer">
    <div class="authBg"></div>
    <main class="authMain">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.authContainer {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.authBg {
  position: absolute;
  display: flex;
  width: 100%;
  max-width: 512px;
  align-items: center;
  height: 512px;
  background-image: url("@/assets/images/Lines.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top;
  z-index: -1;
}

.authMain {
  position: absolute;
  top: 10%;
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
}
</style>
