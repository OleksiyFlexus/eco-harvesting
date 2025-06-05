<script setup></script>

<template>
  <div class="authContainer">
    <header class="authHeader">
      <HeaderLogo />
    </header>
    <main class="authMain">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.authContainer {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.authHeader {
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
}
</style>
