import { z } from "zod";
import { createBaseAction } from "./baseAction";

export const resultAssertion = createBaseAction(
  "resultAssertion",
  "This function is called when the initial instructions asked to assert something; then 'assertion' is either true or false (boolean) depending on whether the assertion succeeded.",
  {
    type: "object",
    properties: {
      assertion: { type: "boolean" },
    },
  },
  z.object({
    assertion: z.boolean(),
  }),
  async (_, args) => {
    return args;
  }
);
