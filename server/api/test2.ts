export default defineEventHandler(async () => {
  const res = await $fetch("https://testing-nuxt3.microcms.io/api/v1/blogs", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY as string,
    },
  });
  console.log("test2,success");
  return res;
});
