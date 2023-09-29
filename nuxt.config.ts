// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindTypography from "@tailwindcss/typography";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-microcms-module", "@nuxtjs/tailwindcss", "@pinia/nuxt"],
  microCMS: {
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    // apiKey: process.env.MICROCMS_API_KEY,
    apiKey: "FeWqlTlqu3vXjNmeNLvTaWssmEe0HwLOlW1X",
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

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/", "/test"],
      ignore: ["/contact"],
    },
  },
  experimental: {
    payloadExtraction: true,
  },

  // routeRules: {
  //   "/": { prerender: true },
  //   "/test": { ssr: true, prerender: true },
  //   "/[id]": { ssr: true, prerender: true },
  //   "/contact": { ssr: true, prerender: false },
  // },
});
