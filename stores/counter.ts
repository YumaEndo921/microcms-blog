import { defineStore } from "pinia";

import { Blog } from "../types/blog";
import { dateFormat } from "~/utils/dateFormat";

// const res = await $fetch("https://testing-nuxt3.microcms.io/api/v1/blogs", {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//     "X-MICROCMS-API-KEY": "FeWqlTlqu3vXjNmeNLvTaWssmEe0HwLOlW1X",
//   },
// });

export const useCounterStore = defineStore("counterStore", {
  state: () => {
    return {
      //   res,
    };
  },
});
