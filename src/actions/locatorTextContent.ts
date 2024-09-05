import { z } from "zod";
import { createBaseAction } from "./baseAction";

export const locatorTextContent = createBaseAction(
  "locator_textContent",
  "Returns the node.textContent.",
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
    return { textContent: await getLocator(args.elementId).textContent() };
  }
);
