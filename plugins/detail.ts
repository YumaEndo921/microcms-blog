import { Blog } from "../types/blog";
import { dateFormat } from "~/utils/dateFormat";

export default defineNuxtPlugin(async () => {
  // const { data } = await useMicroCMSGetList<Blog>({
  //   endpoint: "blogs",
  // });

  return {
    // provide: {
    //   res: data,
    // },
  };
});
