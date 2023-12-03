// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindTypography from "@tailwindcss/typography";

export default defineNuxtConfig({
  app: {
    head: {
      title: "mamelib | 初心者エンジニアの勉強ブログ",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          // hid: "description",
          name: "description",
          content: "未経験から転職してエンジニアになった人間の書き残しです。",
        },
      ],
    },
  },
  devtools: { enabled: true },
  modules: ["nuxt-microcms-module", "@nuxtjs/tailwindcss", "@pinia/nuxt"],
  microCMS: {
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
  },
  tailwindcss: {
    config: {
      content: [],
      plugins: [tailwindTypography],
    },
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  ssr:true,

  // nitro: {
  //   prerender: {
  //     crawlLinks: true,
  //     routes: ["/", "/test"],
  //     ignore: ["/contact"],
  //   },
  // },
  experimental: {
    payloadExtraction: true,
  },
  routeRules: {
    "/": { ssr: true, prerender: true },
    "/[id]": { ssr: true, prerender: true },
    "/contact": { ssr: true, prerender: true },
  },
});
