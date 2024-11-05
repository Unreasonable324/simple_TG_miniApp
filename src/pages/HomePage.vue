<script setup lang="ts">
import { useRoute } from 'vue-router';
import { webApp } from '@/core/telegram';

const route = useRoute();
</script>
<template>
  <div class="font-bold p-5 bg-white">
    id реферал:<span class="text-[red]">{{ route.query.id }}</span>
    <pre>{{ webApp }}</pre>
  </div>
</template>
<style></style>
