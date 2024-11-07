<script setup lang="ts">
import { ref } from 'vue';
import { useWebApp } from 'vue-tg';

const { sendData } = useWebApp();
const text = ref("");
const send = () => {
  sendData(JSON.stringify({ data: text.value, button_text: "web" }));
};
</script>
<template>
  <div class="flex gap-3 flex-col py-2">
    <input type="text" v-model="text" class="border" placeholder="text" />
    <button class="bg-blue-200 px-3 rounded-lg" @click="send">send</button>
    {{ text }}
  </div>
</template>
<style></style>
