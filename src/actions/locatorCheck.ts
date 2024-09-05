import { z } from "zod";
import { createBaseAction } from "./baseAction";

export const locatorCheck = createBaseAction(
  "locator_check",
  "Ensure that checkbox or radio element is checked.",
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
    await getLocator(args.elementId).check();
    return { success: true };
  }
);
