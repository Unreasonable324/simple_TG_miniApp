<script setup lang="ts">
import { BackButton, useWebApp } from 'vue-tg';

const { initDataUnsafe } = useWebApp();
</script>
<template>
  <div class="">
    <div class="">
      you:
      <pre>{{ initDataUnsafe }}</pre>
    </div>
    <BackButton @click="$router.push('/')" />
  </div>
</template>
<style></style>
