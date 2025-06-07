<script setup lang="ts"></script>

<template>
  <div class="authLayoutContent">
    <header class="authBg"></header>
    <main class="authMain">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.authLayoutContent {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.authBg {
  position: absolute;
  display: flex;
  width: 100%;
  max-width: 512px;
  height: 512px;
  margin-top: 5%;
  align-items: center;
  background-image: url("@/assets/images/Lines.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top;
  z-index: -1;
}

.authMain {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
