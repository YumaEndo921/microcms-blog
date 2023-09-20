<script setup lang="ts">
const title = ref<string>("タイトル");

onMounted(() => {
  title.value = "タイトル(CSR)";
});
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>
