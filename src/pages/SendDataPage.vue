<script setup lang="ts">
import { ref } from 'vue';
import { useWebApp } from 'vue-tg';

const { initDataUnsafe, sendData } = useWebApp();

const message = ref<unknown>("");
const token = "7871921914:AAE1tqgOHPexqTzqOXrLHkunIckD7fpo0S0";
const send = async () => {
  if (!initDataUnsafe?.user?.id) return;
  sendData("123213213test");

  fetch(
    `https://api.telegram.org/bot${token}/sendMessage?text=${message.value}&chat_id=${initDataUnsafe.user.id}&parse_mode=html`,
    {
      method: "POST",
      // body: JSON.stringify({
      //   parse_mode: "html",
      //   chat_id: initDataUnsafe.user.id,
      //   text: message.value,
      // }),
    }
  );
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
