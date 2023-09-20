// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindTypography from "@tailwindcss/typography";

const { NUXT_API_KEY } = process.env;

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-microcms-module", "@nuxtjs/tailwindcss"],
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
  runtimeConfig: {
    apiKey: NUXT_API_KEY,
    public: {
      apiKey: process.env.NODE_ENV !== "production" ? NUXT_API_KEY : undefined,
    },
  },
});
