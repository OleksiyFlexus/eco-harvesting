<script setup lang="ts">
import HomeIcon from "@/assets/icons/home.svg";
import MapIcon from "@/assets/icons/map.svg";
import TaskIcon from "@/assets/icons/task.svg";
import VehicleIcon from "@/assets/icons/vehicle.svg";
import SettingsIcon from "@/assets/icons/Settings.svg";
import SupportIcon from "@/assets/icons/Suport.svg";

const mainMenuItems = [
  { id: 1, title: "Моніторинг", icon: HomeIcon, link: "/dashboard", style: { width: "24px", height: "24px" } },
  { id: 2, title: "Карта", icon: MapIcon, link: "/dashboard" },
  { id: 3, title: "Завдання", icon: TaskIcon, link: "/dashboard" },
  { id: 4, title: "Техніка", icon: VehicleIcon, link: "/dashboard" },
];

const settingsMenuItems = [
  { id: 1, title: "Налаштування", icon: SettingsIcon, link: "/dashboard" },
  { id: 2, title: "Підтримка", icon: SupportIcon, link: "/dashboard" },
];
</script>

<template>
  <div class="dashboardLayoutContent">
    <div class="navigation">
      <div class="menuContainer">
        <TheMenu :menuItems="mainMenuItems" />
        <TheMenu :menuItems="settingsMenuItems" />
      </div>
      <div class="userContainer">
        <TheUser />
      </div>
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

.navigation {
  width: 100%;
  max-width: 240px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid #e4e7ec;
}

.menuContainer {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.userContainer {
  width: 100%;
  max-width: 210px;
  border-top: 1px solid #e4e7ec;
  padding-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  position: fixed;
  bottom: 30px;
  height: 65px;
}

.dashboardContent {
  padding: 32px 32px;
  width: 100%;
}
</style>
