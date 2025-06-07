<script setup lang="ts">
import HomeIcon from "@/assets/icons/home.svg";
import MapIcon from "@/assets/icons/map.svg";
import TaskIcon from "@/assets/icons/task.svg";
import VehicleIcon from "@/assets/icons/vehicle.svg";
import SettingsIcon from "@/assets/icons/Settings.svg";
import SupportIcon from "@/assets/icons/Suport.svg";

const mainMenuItems = [
  { id: 1, title: "Моніторинг", icon: HomeIcon, link: "/monitoring", style: { width: "24px", height: "24px" } },
  { id: 2, title: "Карта", icon: MapIcon, link: "/map" },
  { id: 3, title: "Завдання", icon: TaskIcon, link: "/tasks" },
  { id: 4, title: "Техніка", icon: VehicleIcon, link: "/vehicles" },
];

const settingsMenuItems = [
  { id: 1, title: "Налаштування", icon: SettingsIcon, link: "/settings" },
  { id: 2, title: "Підтримка", icon: SupportIcon, link: "/support" },
];
</script>

<template>
  <div class="menuContainer">
    <TheMenu :menuItems="mainMenuItems" />
    <TheMenu :menuItems="settingsMenuItems" />
  </div>
  <div class="userContainer">
    <TheUser />
  </div>
</template>

<style scoped>
.menuContainer {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.userContainer {
  width: 100%;
  max-width: 240px;
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

@media (max-width: 768px) {
  .menuContainer {
    height: 85%;
    flex-direction: column;
    justify-content: space-between;
  }

  .userContainer {
    width: 48px;
    height: 80px;
    padding: 0;
    flex-direction: column;
    border-top: none;
  }
}
</style>
