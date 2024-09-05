import { z } from "zod";
import { createBaseAction } from "./baseAction";

export const locatorFill = createBaseAction(
  "locator_fill",
  "Set a value to the input field.",
  {
    type: "object",
    properties: {
      elementId: { type: "string" },
      value: { type: "string" },
    },
  },
  z.object({
    elementId: z.string(),
    value: z.string(),
  }),
  async ({ getLocator }, args) => {
    await getLocator(args.elementId).fill(args.value);
    return { success: true };
  }
);
