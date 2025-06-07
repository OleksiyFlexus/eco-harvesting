<script setup lang="ts"></script>

<template>
  <div class="profileHeader">
    <div class="profileBg">
      <div class="profileImg">
        <img src="@/assets/images/Avatar.jpg" alt="Avatar" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.profileHeader {
  width: 100%;
  height: 100%;
  max-height: 180px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.profileBg {
  width: 100%;
  height: 120px;
  position: absolute;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: url("@/assets/images/Gradient.png");
  background-size: cover;
  background-repeat: no-repeat;
}

.profileImg {
  width: 96px;
  height: 96px;
  border: 4px solid #ffffff;
  border-radius: 50%;
  box-shadow: 0 4px 4px #10182808;
  position: absolute;
  top: 86px;
  left: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  object-fit: contain;
  object-position: top;
}
</style>
