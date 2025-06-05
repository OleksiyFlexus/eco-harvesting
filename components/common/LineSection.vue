<script setup></script>

<template>
  <div class="lineSection">
    <div class="horizontalLine"></div>
    <div class="horizontalLineText">OR</div>
    <div class="horizontalLine"></div>
  </div>
</template>

<style scoped>
.lineSection {
  display: flex;
  width: 100%;
  align-items: center;
  cursor: default;
  gap: 8px;
  justify-content: center;
  flex-direction: row;
}

.horizontalLine {
  display: flex;
  height: 1px;
  border: 1px solid #e4e7ec;
  flex-grow: 1;
}

.horizontalLineText {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #475467;
}
</style>
