import { z } from "zod";
import { createBaseAction } from "./baseAction";

export const locatorIsEnabled = createBaseAction(
  "locator_isEnabled",
  "Returns whether the element is enabled.",
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
    return { isEnabled: await getLocator(args.elementId).isEnabled() };
  }
);
