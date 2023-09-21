export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const res = await $fetch("https://testing-nuxt3.microcms.io/api/v1/blog", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY as string,
    },
  });
  console.log("success");
  return res;
});
