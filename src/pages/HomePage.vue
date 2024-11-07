<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>
<template>
  <div class="font-bold p-5 bg-white">
    id реферал:<span class="text-[red]">{{ route.query.id }}</span>
    <br />
    номер телефона:<span class="text-[red]">{{ route.query.phone_number }}</span>
 
  </div>
</template>
<style></style>
