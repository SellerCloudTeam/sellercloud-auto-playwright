import { z } from "zod";
import { createBaseAction } from "./baseAction";

export const locatorClear = createBaseAction(
  "locator_clear",
  "Clear the input field.",
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
    await getLocator(args.elementId).clear();
    return { success: true };
  }
);
