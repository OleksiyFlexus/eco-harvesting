<script setup lang="ts">
import LogoIcon from "../assets/icons/Logo.svg";
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <div class="dashboardLayoutContent">
    <div class="mobileMenu">
      <div class="logoContainer">
        <LogoIcon :style="{ width: '32px', height: '32px' }" />
        <h2>Eco Harvesting</h2>
      </div>
      <BurgerBtn @toggleMenu="toggleMenu" />
    </div>
    <div class="navigation">
      <TheSidebar />
    </div>
    <div class="menuOverlay" :class="{ open: isMenuOpen }">
      <TheSidebar />
    </div>
    <div class="dashboardContent">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.dashboardLayoutContent {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}

.mobileMenu {
  width: 100%;
  display: none;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border-bottom: 1px solid #e4e7ec;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logoContainer {
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;
}

.navigation {
  width: 100%;
  max-width: 280px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid #e4e7ec;
}

.menuOverlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 80px;
  height: 100%;
  background-color: white;
  z-index: 1000;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  display: none;
  flex-direction: column;
  padding: 16px;
}

.menuOverlay.open {
  transform: translateX(0);
}

.dashboardContent {
  width: 100%;
  height: 100%;
}

@media (max-width: 768px) {
  .dashboardLayoutContent {
    flex-direction: column;
  }
  .menuOverlay {
    display: flex;
  }
  .burger {
    display: block;
  }

  .mobileMenu {
    display: flex;
  }

  .navigation {
    display: none;
  }
}
</style>
