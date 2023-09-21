<template>
  <h1 class="text-center font-sans text-4xl font-semibold">
    Nuxt3 Jamstack Blogs(change)
  </h1>
  <ul class="mt-16 grid grid-cols-1 gap-8">
    <li v-for="blog in data?.contents" :key="blog.id">
      <NuxtLink
        :to="`/${blog.id}`"
        class="flex flex-col gap-4 sm:transition-shadow sm:hover:shadow md:flex-row md:items-center lg:gap-6"
      >
        <img
          :src="blog.eyecatch?.url"
          :width="blog.eyecatch?.width"
          :height="blog.eyecatch?.height"
          class="md:w-1/3 md:flex-none"
          alt=""
        />
        <div class="md:p-2.5 md:pr-0">
          <div
            class="inline-block rounded border-2 border-indigo-600 px-1.5 py-0.5 text-sm font-semibold text-indigo-600"
          >
            {{ blog.category?.name }}
          </div>
          <div class="mt-2 text-lg font-semibold md:text-xl">
            {{ blog.title }}
          </div>
          <div class="mt-1 text-sm text-gray-700">
            {{ dateFormat(blog.publishedAt ?? blog.createdAt) }}
          </div>
        </div>
      </NuxtLink>
    </li>
  </ul>
  <NuxtLink to="/contact">
    <button class="border-4 p-2 border-gray-400 mt-10" type="button">
      問い合わせ
    </button>
  </NuxtLink>
</template>

<script setup lang="ts">
import { Blog } from "../types/blog";
import { dateFormat } from "~/utils/dateFormat";

const { data } = await useMicroCMSGetList<Blog>({
  endpoint: "blogs",
});
// const { data } = await useFetch("/api/test2");

// async function handleSubmit() {
//   const { data } = await useFetch("/api/test2");
//   if (status.value === "error") {
//     console.log("エラー");
//   } else {
//     console.log("test成功");
//   }
// }
</script>
