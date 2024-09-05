import { z } from "zod";
import { createBaseAction } from "./baseAction";

export const locatorIsEditable = createBaseAction(
  "locator_isEditable",
  "Returns whether the element is editable.",
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
    return { isEditable: await getLocator(args.elementId).isEditable() };
  }
);
