<script setup lang="ts">
import GoogleIcon from "@/assets/icons/Google.svg";
import AppleIcon from "@/assets/icons/Apple.svg";

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
  <RegistrationForm>
    <RegistrationHeader title="Log in to your account" description="Welcome back! Please enter your details." />
    <RegistrationMain v-for="inputItem in inputItems" :key="inputItem.id" :inputItem="inputItem" />
    <ConfirmBtn>Log in</ConfirmBtn>
    <LineSection />
    <RegistrationSocials :buttons="socialBtns" />
    <RegistrationFooter description="Don't have an account?">
      <NuxtLink to="/sign-up"><ChangeLoginBtn>Sign up</ChangeLoginBtn></NuxtLink>
    </RegistrationFooter>
  </RegistrationForm>
</template>

<style scoped></style>
