<script setup lang="ts">
import dayjs from "dayjs";

const { data: time } = useAsyncData(async () => {
  return dayjs().format("YYYY/MM/DD HH:mm:ss");
});
</script>

<template>
  <p>現在の時刻: {{ time }}</p>
</template>
