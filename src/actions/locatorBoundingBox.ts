import { z } from "zod";
import { createBaseAction } from "./baseAction";

export const locatorBoundingBox = createBaseAction(
  "locator_boundingBox",
  "Returns the bounding box of the element or null if the element is not visible.",
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
    return await getLocator(args.elementId).boundingBox();
  }
);
