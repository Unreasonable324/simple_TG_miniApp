<script setup lang="ts">
import { useRoute } from 'vue-router';
import { BackButton, MainButton, Popup, useWebAppPopup } from 'vue-tg';

const { showAlert } = useWebAppPopup();
const route = useRoute();
</script>
<template>
  <div class="font-bold p-5 bg-white">
  <div class="">
  <pre>{{route.query}}</pre>
  
  
  </div>
    id реферал:<span class="text-[red]">{{ route.query.id }}</span>
    <br />
    номер телефона:<span class="text-[red]">{{ route.query.phone_number }}</span>
 
  </div>
    <MainButton text="главная кнопка" @click="showAlert('тык на главную')"></MainButton>

</template>
<style></style>
