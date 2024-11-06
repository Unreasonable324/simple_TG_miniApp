<script setup lang="ts">
import { ref } from 'vue';

// import type { LoginWidgetUser } from 'vue-tg';
// import { LoginWidget } from 'vue-tg';

const data = ref({});

// function handleUserAuth(user: LoginWidgetUser) {
//   data.value = user;
// }
</script>
<template>
  <div class="bg-white">
      <!-- <LoginWidget bot-username="@green_way_test_bot" @auth="handleUserAuth" /> -->
      <pre>{{ data }}</pre>
  </div>
</template>
<style></style>
