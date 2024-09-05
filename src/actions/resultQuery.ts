import { z } from "zod";
import { createBaseAction } from "./baseAction";

export const resultQuery = createBaseAction(
  "resultQuery",
  "This function is called at the end when the initial instructions asked to extract data; then 'query' property is set to a text value of the extracted data.",
  {
    type: "object",
    properties: {
      query: { type: "string" },
    },
  },
  z.object({
    query: z.string(),
  }),
  async (_, args) => {
    return args;
  }
);
