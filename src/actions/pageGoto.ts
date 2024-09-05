import { z } from "zod";
import { createBaseAction } from "./baseAction";

export const pageGoto = createBaseAction(
  "page_goto",
  "Navigate to a URL.",
  {
    type: "object",
    properties: {
      url: { type: "string" },
    },
  },
  z.object({
    url: z.string(),
  }),
  async ({ page }, args) => {
    return {
      url: await page.goto(args.url),
    };
  }
);
