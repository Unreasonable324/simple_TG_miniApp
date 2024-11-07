<script setup lang="ts">
import { BackButton, MainButton, useWebAppPopup } from 'vue-tg';

const { showAlert } = useWebAppPopup();
</script>
<template>
  <div class="">
    <MainButton text="главная кнопка" @click="showAlert('главная кнопка')"></MainButton>
    <BackButton @click="$router.push('/')" />
  </div>
</template>
<style></style>
