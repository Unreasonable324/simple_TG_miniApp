<script setup lang="ts">
import { useRouter } from 'vue-router';

// import { webApp } from '@/core/telegram';

const router = useRouter();
// webApp.expand();

const go = (path: string) => {
  router.push(path);
};
</script>

<template>
  <div class="p-10 bg-white text-black">
    <div class="flex gap-3">
      <button class="bg-blue-200 p-3 rounded-lg" @click="go('/')">home</button>
      <button class="bg-blue-200 p-3 rounded-lg" @click="go('/about')">about</button>
     
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
