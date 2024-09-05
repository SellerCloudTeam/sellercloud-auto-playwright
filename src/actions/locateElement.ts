import { randomUUID } from "crypto";
import { z } from "zod";
import { createBaseAction } from "./baseAction";

export const locateElement = createBaseAction(
  "locateElement",
  "Locates element using a CSS selector and returns elementId. This element ID can be used with other functions to perform actions on the element.",
  {
    type: "object",
    properties: {
      cssSelector: {
        type: "string",
      },
    },
  },
  z.object({
    cssSelector: z.string(),
  }),
  async () => {
    const elementId = randomUUID();
    return { elementId };
  }
);
