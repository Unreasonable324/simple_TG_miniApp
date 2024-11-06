<script setup lang="ts">
const { MainButton, useWebAppPopup, useWebApp } = await import("vue-tg");
const { showAlert } = useWebAppPopup();
const { initDataUnsafe } = useWebApp();
</script>
<template>
  <div class="">
    <div class="">you:{{ initDataUnsafe }}</div>
    <MainButton text="главная кнопка" @click="showAlert('главная кнопка')"></MainButton>
  </div>
</template>
<style></style>
