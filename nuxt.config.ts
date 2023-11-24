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
  // ssr:true,

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
});
