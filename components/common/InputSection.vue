<script setup lang="ts">
interface InputItem {
  placeholder: string;
  type: string;
  pattern?: string;
  required?: boolean;
}

const props = defineProps<{
  inputItem: InputItem;
}>();

const inputValue = ref("");
</script>

<template>
  <main class="mainContainer">
    <div class="inputItems">
      <input class="animatedInput" :type="props.inputItem.type" :pattern="props.inputItem.pattern" :required="props.inputItem.required" v-model="inputValue" />
      <label class="animatedLabel">{{ props.inputItem.placeholder }}</label>
    </div>
  </main>
</template>

<style scoped>
.mainContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 16px;
}
.inputItems {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 360px;
}
</style>
