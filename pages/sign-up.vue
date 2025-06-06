<script setup lang="ts">
import GoogleIcon from "@/assets/icons/Google.svg";
import AppleIcon from "@/assets/icons/Apple.svg";

definePageMeta({
  layout: "auth",
});

const inputItems = [
  { id: 1, name: "name", placeholder: "Введіть ваше ім'я", type: "text", required: true },
  { id: 2, name: "email", placeholder: "Введіть ваш e-mail", type: "email", pattern: "[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$", required: true },
  { id: 3, name: "password", placeholder: "Введіть ваш пароль", type: "password", required: true },
];

const socialBtns = [
  { id: 1, name: "Google", icon: GoogleIcon, title: "Sign up with Google" },
  { id: 2, name: "Apple", icon: AppleIcon, title: "Sign up with Apple" },
];
</script>

<template>
  <HeaderLogo />
  <TheHeader title="Create an account" description="Create your own household." />
  <RegistrationForm>
    <InputSection v-for="inputItem in inputItems" :key="inputItem.id" :inputItem="inputItem" />
    <ConfirmBtn>Get started</ConfirmBtn>
    <LineSection />
    <SocialSection :buttons="socialBtns" />
    <TheFooter description="Already have an account?">
      <NuxtLink to="/sign-in">
        <TextBtn>Log in</TextBtn>
      </NuxtLink>
    </TheFooter>
  </RegistrationForm>
</template>
