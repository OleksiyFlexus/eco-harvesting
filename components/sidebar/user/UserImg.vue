<script setup lang="ts"></script>

<template>
  <div class="userImg">
    <NuxtLink to="/profile">
      <img src="@/assets/images/Avatar.jpg" alt="Avatar" />
    </NuxtLink>
  </div>
</template>

<style scoped>
.userImg {
  width: 100%;
  max-width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #e4e7ec;
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: contain;
  object-position: top;
}

.userImg img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
</style>
