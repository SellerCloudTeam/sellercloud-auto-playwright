import { z } from "zod";
import { createBaseAction } from "./baseAction";

export const locatorInnerHTML = createBaseAction(
  "locator_innerHTML",
  "Returns the element.innerHTML.",
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
    return { innerHTML: await getLocator(args.elementId).innerHTML() };
  }
);
