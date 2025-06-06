<script setup lang="ts">
import GoogleIcon from "@/assets/icons/Google.svg";
import AppleIcon from "@/assets/icons/Apple.svg";
import TextBtn from "../components/common/buttons/TextBtn.vue";

definePageMeta({
  layout: "auth",
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
  <HeaderLogo />
  <RegistrationForm>
    <TheHeader title="Log in to your account" description="Welcome back! Please enter your details." />
    <InputSection v-for="inputItem in inputItems" :key="inputItem.id" :inputItem="inputItem" />
    <ForgotPassword />
    <NuxtLink class="confirmBtn" to="/dashboard">Log in</NuxtLink>
    <LineSection />
    <SocialSection :buttons="socialBtns" />
    <TheFooter description="Don't have an account?">
      <NuxtLink to="/sign-up"><TextBtn>Sign up</TextBtn></NuxtLink>
    </TheFooter>
  </RegistrationForm>
</template>
<style scoped></style>
