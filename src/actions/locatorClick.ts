import { z } from "zod";
import { createBaseAction } from "./baseAction";

export const locatorClick = createBaseAction(
  "locator_click",
  "Click an element.",
  {
    type: "object",
    properties: {
      elementId: { type: "string" },
    },
  },
  z.object({
    elementId: z.string(),
  }),
  async ({ getLocator }, args) => {
    await getLocator(args.elementId).click();
    return { success: true };
  }
);
