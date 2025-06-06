<script setup lang="ts"></script>

<template>
  <div class="forgotSection">
    <CheckBox label="Remember me" />
    <NuxtLink to="/forgot-password"><ForgotPassBtn>Forgot password?</ForgotPassBtn></NuxtLink>
  </div>
</template>

<style scoped>
.forgotSection {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}
</style>
