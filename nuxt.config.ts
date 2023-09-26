// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindTypography from "@tailwindcss/typography";

export default defineNuxtConfig({
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
  routeRules: {
    "/": { prerender: true },
    "/test": { ssr: true, prerender: true },
    "/[id]": { ssr: true, prerender: true },
    "/contact": { ssr: true, prerender: false },
  },
  // ssr: true,
  // generate: {
  //   exclude: [/^\/contact/],
  // },
  // routeRules: {
  //   "/": { static: true },
  //   "/test": { static: true },
  //   "/[id]": { static: true },
  //   "/contact": { ssr: true, prerender: false },
  // },
  // nitro: {
  //   preset: "netlify",
  // },
});
