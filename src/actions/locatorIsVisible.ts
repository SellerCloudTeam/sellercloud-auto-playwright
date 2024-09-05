import { z } from "zod";
import { createBaseAction } from "./baseAction";

export const locatorIsVisible = createBaseAction(
  "locator_isVisible",
  "Returns whether the element is visible.",
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
    return { isVisible: await getLocator(args.elementId).isVisible() };
  }
);
