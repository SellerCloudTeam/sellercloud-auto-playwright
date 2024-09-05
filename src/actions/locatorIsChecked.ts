import { z } from "zod";
import { createBaseAction } from "./baseAction";

export const locatorIsChecked = createBaseAction(
  "locator_isChecked",
  "Returns whether the element is checked.",
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
    return { isChecked: await getLocator(args.elementId).isChecked() };
  }
);
