<script setup lang="ts">
import Mailicon from "@/assets/icons/Mailicon.svg";
import ArrowLeftIcon from "@/assets/icons/ArrowLeft.svg";

definePageMeta({
  layout: "auth-layout",
});

const numbers = ref(["", "", "", ""]);
const showManual = ref(false);
const showManualDescription = ref("Enter code manually");

function showManualInput() {
  numbers.value = ["", "", "", ""];
  showManual.value = true;
  showManualDescription.value = "Submit";
}
</script>

<template>
  <div class="forgotPasswordPage">
    <ForgotPasswordForm>
      <IconContainer>
        <Mailicon :style="{ width: '24px', height: '24px' }" />
      </IconContainer>
      <TheHeader title="Check your email" description="We sent a verification link to olivia@untitledui.com" />
      <div class="numberSection" v-if="showManual">
        <NumberContainer v-for="number in numbers" :key="number"> </NumberContainer>
      </div>
      <ConfirmBtn @click="showManualInput">{{ showManualDescription }}</ConfirmBtn>
      <TheFooter v-if="showManual" description="Don't receive the code?">
        <TextBtn>Click to resend</TextBtn>
      </TheFooter>
      <NuxtLink to="/sign-in">
        <TextBtn><ArrowLeftIcon class="arrowLeftIcon" />Back to log in</TextBtn>
      </NuxtLink>
    </ForgotPasswordForm>
  </div>
</template>

<style scoped>
.forgotPasswordPage {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.numberSection {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
}

.arrowLeftIcon {
  width: 24px;
  height: 24px;
}

@media (max-width: 768px) {
  .forgotPasswordPage {
    padding: 15px;
  }
}
</style>
