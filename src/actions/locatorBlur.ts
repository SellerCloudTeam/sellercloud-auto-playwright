import { z } from "zod";
import { createBaseAction } from "./baseAction";

export const locatorBlur = createBaseAction(
  "locator_blur",
  "Removes keyboard focus from the current element.",
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
    await getLocator(args.elementId).blur();
    return { success: true };
  }
);
