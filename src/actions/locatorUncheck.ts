import { z } from "zod";
import { createBaseAction } from "./baseAction";

export const locatorUncheck = createBaseAction(
  "locator_uncheck",
  "Ensure that checkbox or radio element is unchecked.",
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
    await getLocator(args.elementId).uncheck();
    return { success: true };
  }
);
