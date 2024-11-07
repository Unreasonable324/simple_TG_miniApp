<script setup lang="ts">
import { ref } from 'vue';
import { BackButton, MainButton, Popup, useWebAppPopup } from 'vue-tg';

const text = ref("");
const { showAlert } = useWebAppPopup();
function handlePopupClose(buttonId: string) {
  text.value = buttonId;
}
const buttons = [
  {
    id: "ok",
    type: "ok",
    text: "ok",
  },
  {
    id: "cancel",
    type: "cancel",
    text: "cancel",
  },
] as PopupButton[];
</script>
<template>
  <div class="py-3">
    <button class="bg-blue-200 px-3 rounded-lg">alert</button>
    <Popup message="Hello" @close="handlePopupClose" :buttons="buttons" />
    {{ text }}
    <MainButton text="главная кнопка" @click="showAlert('тык на главную')"></MainButton>
    <BackButton @click="$router.push('/')" />
  </div>
</template>
<style></style>
