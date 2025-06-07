<script setup lang="ts">
import GoogleIcon from "@/assets/icons/Google.svg";
import AppleIcon from "@/assets/icons/Apple.svg";
import LogoIcon from "@/assets/icons/Logo.svg";

definePageMeta({
  layout: "auth-layout",
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
  <div class="signUpPage">
    <HeaderLogo>
      <LogoIcon class="logoIcon" />
    </HeaderLogo>
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
  </div>
</template>
<style scoped>
.signUpPage {
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
  .signUpPage {
    padding: 15px;
  }
}
</style>
