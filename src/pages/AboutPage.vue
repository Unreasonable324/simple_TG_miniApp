<script setup lang="ts">
import { MainButton, useWebApp, useWebAppPopup } from 'vue-tg';

const { showAlert } = useWebAppPopup();
const { initDataUnsafe } = useWebApp();
</script>
<template>
  <div class="">
    <div class="">
      you:
      <!-- <pre>{{ initDataUnsafe }}</pre> -->
    </div>
    <MainButton text="главная кнопка" @click="showAlert('главная кнопка')"></MainButton>
  </div>
</template>
<style></style>
