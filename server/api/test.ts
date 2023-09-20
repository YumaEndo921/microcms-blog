export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig();
  const body = await readBody(event);
  await $fetch("https://testing-nuxt3.microcms.io/api/v1/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-MICROCMS-API-KEY": runtimeConfig.public.apiKey,
    },
    body: { subject: body.subject, name: body.name, message: body.message },
  });
  console.log("success");
});
