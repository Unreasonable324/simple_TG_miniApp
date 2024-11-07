<script setup lang="ts">
import { BackButton, MainButton, useWebApp, useWebAppPopup } from 'vue-tg';

const { showAlert } = useWebAppPopup();
const { initDataUnsafe } = useWebApp();
</script>
<template>
  <div class="">
    <div class="">
      you:
      <pre>{{ initDataUnsafe }}</pre>
    </div>
    <MainButton text="главная кнопка" @click="showAlert('главная кнопка')"></MainButton>
     <BackButton @click="$router.push('/')" />
  </div>
</template>
<style></style>
