<script setup lang="ts">
definePageMeta({
  layout: "dashboard-layout",
});
</script>

<template>
  <div class="leafletMapContainer">
    <LMap :zoom="6" :center="[47.21322, -1.559482]" :use-global-leaflet="false">
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        layer-type="base"
        name="OpenStreetMap" />
    </LMap>
  </div>
</template>

<style scoped>
.leafletMapContainer {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
}
</style>
