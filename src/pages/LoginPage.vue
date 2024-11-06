<script setup lang="ts">
import type { LoginWidgetUser } from 'vue-tg';
import { LoginWidget } from 'vue-tg';

const user = ref({});

function handleUserAuth(user: LoginWidgetUser) {
  user.value = user;
}
</script>
<template>
  <LoginWidget bot-username="green_way_test_bot" @auth="handleUserAuth" />
  {{user}}
</template>
<style></style>
