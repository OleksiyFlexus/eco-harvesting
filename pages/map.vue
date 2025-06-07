<script setup lang="ts">
import ChangeIcon from "@/assets/icons/Change.svg";
import CurrentPositionIcon from "@/assets/icons/Nav-Pointer.svg";
definePageMeta({
  layout: "dashboard-layout",
});
</script>

<template>
  <div class="mapPageContent">
    <LeafletMap />
    <MapSearchSection class="mapSearchSection" />
    <MapBtn class="changeBtn">
      <ChangeIcon class="mapBtnIcon" />
    </MapBtn>
    <MapBtn class="currentPositionBtn">
      <CurrentPositionIcon class="mapBtnIcon" />
    </MapBtn>
  </div>
</template>

<style scoped>
.mapPageContent {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
}

.changeBtn {
  position: absolute;
  top: 10px;
  right: 10px;
}
.currentPositionBtn {
  position: absolute;
  top: 70px;
  right: 10px;
}

.mapSearchSection {
  position: absolute;
  top: 10px;
}

.mapBtnIcon {
  width: 16px;
  height: 16px;
}

@media (max-width: 768px) {
  .changeBtn {
    top: 10px;
    right: 10px;
  }
  .currentPositionBtn {
    top: 60px;
    right: 10px;
  }
}
</style>
