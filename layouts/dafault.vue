<template>
  <div>
    <slot />
  </div>
</template>

<script setup lang="ts">
// import { Blog } from "../types/blog";
// import { dateFormat } from "~/utils/dateFormat";

// const { data } = await useMicroCMSGetList<Blog>({
//   endpoint: "blogs",
// });
// const { data } = await useFetch("/api/test2");
// const { data } = useAsyncData("/", async () => {
//   const { data } = await useFetch("/api/test2");
//   return data;
// });

// async function handleSubmit() {
//   const { data } = await useFetch("/api/test2");
//   if (status.value === "error") {
//     console.log("エラー");
//   } else {
//     console.log("test成功");
//   }
// }
</script>
