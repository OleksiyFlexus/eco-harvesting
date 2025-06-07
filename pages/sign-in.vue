<script setup lang="ts">
import GoogleIcon from "@/assets/icons/Google.svg";
import AppleIcon from "@/assets/icons/Apple.svg";
import TextBtn from "../components/common/buttons/TextBtn.vue";
import LogoIcon from "@/assets/icons/Logo.svg";

definePageMeta({
  layout: "auth-layout",
});

const inputItems = [
  { id: 2, name: "email", placeholder: "Введіть ваш e-mail", type: "email", pattern: "[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$", required: true },
  { id: 3, name: "password", placeholder: "Введіть ваш пароль", type: "password", required: true },
];

const socialBtns = [
  { id: 1, name: "Google", icon: GoogleIcon, title: "Log in with Google" },
  { id: 2, name: "Apple", icon: AppleIcon, title: "Log in with Apple" },
];
</script>

<template>
  <div class="signInPage">
    <HeaderLogo>
      <LogoIcon class="logoIcon" />
    </HeaderLogo>
    <TheHeader title="Log in to your account" description="Welcome back! Please enter your details." />
    <RegistrationForm>
      <InputSection v-for="inputItem in inputItems" :key="inputItem.id" :inputItem="inputItem" />
      <ForgotPasswordSection />
      <NuxtLink class="confirmBtn" to="/dashboard">Log in</NuxtLink>
      <LineSection />
      <SocialSection :buttons="socialBtns" />
      <TheFooter description="Don't have an account?">
        <NuxtLink to="/sign-up"><TextBtn>Sign up</TextBtn></NuxtLink>
      </TheFooter>
    </RegistrationForm>
  </div>
</template>
<style scoped>
.signInPage {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
}

.logoIcon {
  width: 128px;
  height: 128px;
}

@media (max-width: 768px) {
  .signInPage {
    padding: 15px;
  }
}
</style>
