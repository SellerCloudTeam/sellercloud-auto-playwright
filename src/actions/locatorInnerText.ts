import { z } from "zod";
import { createBaseAction } from "./baseAction";

export const locatorInnerText = createBaseAction(
  "locator_innerText",
  "Returns the element.innerText.",
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
    return { innerText: await getLocator(args.elementId).innerText() };
  }
);
