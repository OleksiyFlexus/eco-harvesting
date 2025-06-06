<script setup lang="ts">
const number = ref("");

function onInput(e: Event) {
  const input = (e.target as HTMLInputElement).value;
  number.value = input.replace(/[^0-9]/g, "");
}
</script>

<template>
  <div class="numberContainer">
    <input v-model="number" type="text" inputmode="numeric" maxlength="1" @input="onInput" />
  </div>
</template>

<style scoped>
.numberContainer {
  width: 80px;
  height: 80px;
  border: 2px solid #9e77ed;
  border-radius: 12px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9e77ed;
}

.numberContainer input {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 48px;
  font-weight: 500;
  line-height: 60px;
}
</style>
