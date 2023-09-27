<script setup lang="ts">
import dayjs from "dayjs";
const yearMonth = dayjs().format("YYYY-MM-DD HH:mm:ss");
</script>

<template>
  <p>{{ yearMonth }}</p>
</template>
