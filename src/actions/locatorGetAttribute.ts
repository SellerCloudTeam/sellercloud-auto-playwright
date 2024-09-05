import { z } from "zod";
import { createBaseAction } from "./baseAction";

export const locatorGetAttribute = createBaseAction(
  "locator_getAttribute",
  "Returns the matching element's attribute value.",
  {
    type: "object",
    properties: {
      elementId: { type: "string" },
      attributeName: { type: "string" },
    },
  },
  z.object({
    elementId: z.string(),
    attributeName: z.string(),
  }),
  async ({ getLocator }, args) => {
    return {
      attributeValue: await getLocator(args.elementId).getAttribute(
        args.attributeName
      ),
    };
  }
);
