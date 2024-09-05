import { z } from "zod";
import { createBaseAction } from "./baseAction";

export const expectToBe = createBaseAction(
  "expect_toBe",
  "Asserts that the actual value is equal to the expected value.",
  {
    type: "object",
    properties: {
      actual: { type: "string" },
      expected: { type: "string" },
    },
  },
  z.object({
    actual: z.string(),
    expected: z.string(),
  }),
  async (_, args) => {
    return {
      actual: args.actual,
      expected: args.expected,
      success: args.actual === args.expected,
    };
  }
);
