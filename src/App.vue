<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ClosingConfirmation, ExpandedViewport } from 'vue-tg';

const router = useRouter();
// webApp.expand();

const go = (path: string) => {
  router.push(path);
};
</script>

<template>
  <div class="p-10 bg-white text-black h-screen max-w-[480px] mx-auto">
    <div class="flex gap-3">
      <button class="bg-blue-200 p-3 rounded-lg" @click="go('/')">home</button>
      <button class="bg-blue-200 p-3 rounded-lg" @click="go('/about')">about</button>
      <button class="bg-blue-200 p-3 rounded-lg" @click="go('/alert')">alert</button>
      <button class="bg-blue-200 p-3 rounded-lg" @click="go('/send_data')">send_data</button>
    </div>
    <router-view></router-view>
  </div>
  <ClosingConfirmation />
  <ExpandedViewport />
</template>

<style scoped></style>
