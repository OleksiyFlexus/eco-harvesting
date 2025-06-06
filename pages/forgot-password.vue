<script setup lang="ts">
import Mailicon from "@/assets/icons/Mailicon.svg";
import ArrowLeftIcon from "@/assets/icons/ArrowLeft.svg";

definePageMeta({
  layout: "auth",
});

const numbers = ref(["", "", "", ""]);
const showManual = ref(false);

function showManualInput() {
  numbers.value = ["", "", "", ""];
  showManual.value = true;
}
</script>

<template>
  <IconContainer>
    <Mailicon :style="{ width: '24px', height: '24px' }" />
  </IconContainer>
  <TheHeader title="Check your email" description="We sent a verification link to olivia@untitledui.com" />
  <div class="numberSection" v-if="showManual">
    <NumberContainer v-for="number in numbers" :key="number"> </NumberContainer>
  </div>
  <ConfirmBtn @click="showManualInput">Enter code manually</ConfirmBtn>
  <TheFooter v-if="showManual" description="Don't receive the code?">
    <TextBtn>Click to resend</TextBtn>
  </TheFooter>
  <NuxtLink to="/sign-in">
    <TextBtn><ArrowLeftIcon :style="{ width: '24px', height: '24px' }" />Back to log in</TextBtn>
  </NuxtLink>
</template>

<style scoped>
.numberSection {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
}
</style>
