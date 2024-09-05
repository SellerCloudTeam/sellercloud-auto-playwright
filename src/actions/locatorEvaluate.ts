import { z } from "zod";
import { createBaseAction } from "./baseAction";

export const locatorEvaluate = createBaseAction(
  "locator_evaluate",
  "Execute JavaScript code in the page, taking the matching element as an argument.",
  {
    type: "object",
    properties: {
      elementId: {
        type: "string",
      },
      pageFunction: {
        type: "string",
        description:
          "Function to be evaluated in the page context, e.g. node => node.innerText",
      },
    },
  },
  z.object({
    elementId: z.string(),
    pageFunction: z.string(),
  }),
  async ({ getLocator }, args) => {
    return {
      result: await getLocator(args.elementId).evaluate(args.pageFunction),
    };
  }
);
