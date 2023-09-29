import { Blog } from "../types/blog";
import { dateFormat } from "~/utils/dateFormat";
import dayjs from "dayjs";

export default defineNuxtPlugin(async () => {
  // const { data } = await useMicroCMSGetList<Blog>({
  //   endpoint: "blogs",
  // });

  // const res = await $fetch("https://testing-nuxt3.microcms.io/api/v1/blogs", {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "X-MICROCMS-API-KEY": "FeWqlTlqu3vXjNmeNLvTaWssmEe0HwLOlW1X",
  //   },
  // });

  const yearMonth = dayjs().format("YYYY-MM-DD HH:mm:ss");

  return {
    // provide: {
    //   responce: data,
    //   day: yearMonth,
    // },
  };
});
