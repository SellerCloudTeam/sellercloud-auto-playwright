import { z } from "zod";
import { createBaseAction } from "./baseAction";

export const locatorInputValue = createBaseAction(
  "locator_inputValue",
  "Returns input.value for the selected <input> or <textarea> or <select> element.",
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
    return { inputValue: await getLocator(args.elementId).inputValue() };
  }
);
