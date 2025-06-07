<script setup lang="ts">
import SearchIcon from "@/assets/icons/Search.svg";
</script>

<template>
  <div class="mapSearchSectionContainer">
    <div class="inputContainer">
      <SearchIcon class="searchIcon" />
      <input type="text" placeholder="Пошук" />
    </div>
    <ul class="suggestions">
      <li>Kyiv</li>
    </ul>
  </div>
</template>

<style scoped>
.mapSearchSectionContainer {
  width: 100%;
  max-width: 400px;
  gap: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 1;
}

.inputContainer {
  width: 100%;
  max-height: 45px;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.inputContainer input {
  width: 100%;
}

.suggestions {
  width: 100%;
  max-width: 400px;
  padding: 5px 10px;
  background-color: #ffffff;
}

.searchIcon {
  width: 25px;
  height: 25px;
}

@media (max-width: 768px) {
  .mapSearchSectionContainer {
    max-width: 240px;
    gap: 5px;
  }

  .inputContainer {
    height: 35px;
    padding: 5px;
    font-size: 14px;
  }
  .searchIcon {
    width: 20px;
    height: 20px;
  }

  .suggestions {
    font-size: 14px;
  }
}
</style>
