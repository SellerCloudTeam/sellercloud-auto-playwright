import { z } from "zod";
import { createBaseAction } from "./baseAction";

export const locatorCount = createBaseAction(
  "locator_count",
  "Returns the number of elements matching the locator.",
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
    return { elementCount: await getLocator(args.elementId).count() };
  }
);
