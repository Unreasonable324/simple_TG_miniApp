<script setup lang="ts">
import { ref } from 'vue';
import { useWebApp } from 'vue-tg';

const { initDataUnsafe } = useWebApp();

const message = ref<unknown>("");
const send = async () => {
  if (!initDataUnsafe?.user?.id) return;
  fetch(`https://api.telegram.org/bot${import.meta.env.VITE_BASE_BOT_TOKEN}/test/sendMessage`, {
    method: "POST",
    body: JSON.stringify({
      parse_mode: "html",
      chat_id: initDataUnsafe.user.id,
      text: message.value,
    }),
  });
  //   } catch (e) {
  // console.log(e);
  //   }
};
</script>
<template>
  <div class="flex gap-3 flex-col py-2">
    <input type="text" v-model="message" class="border" placeholder="text" />
    <button class="bg-blue-200 px-3 rounded-lg" @click="send">send</button>
    {{ message }}
  </div>
</template>
<style></style>
