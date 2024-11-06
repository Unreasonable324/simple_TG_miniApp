<script setup lang="ts">
import { useRouter } from 'vue-router';
import { webApp } from '@/core/telegram';

const router = useRouter();
webApp.expand();

const go = (path: string) => {
  router.push(path);
};
</script>

<template>
  <div class="p-10">
    <div class="flex gap-3">
      <button class="bg-blue-200 p-3 rounded-lg" @click="go('/')">home</button>
      <button class="bg-blue-200 p-3 rounded-lg" @click="go('/about')">about</button>
      <button class="bg-blue-200 p-3 rounded-lg" @click="go('/login')">login</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
