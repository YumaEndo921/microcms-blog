export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  await $fetch("https://testing-nuxt3.microcms.io/api/v1/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-MICROCMS-API-KEY": "FeWqlTlqu3vXjNmeNLvTaWssmEe0HwLOlW1X",
      // "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY as string,
    },
    body: { subject: body.subject, name: body.name, message: body.message },
  });
  console.log("success");
});
