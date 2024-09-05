import { z } from "zod";
import { createBaseAction } from "./baseAction";

export const resultError = createBaseAction(
  "resultError",
  "If user instructions cannot be completed, then this function is used to produce the final response.",
  {
    type: "object",
    properties: {
      errorMessage: { type: "string" },
    },
  },
  z.object({
    errorMessage: z.string(),
  }),
  async (_, args) => {
    return {
      errorMessage: args.errorMessage,
    };
  }
);
