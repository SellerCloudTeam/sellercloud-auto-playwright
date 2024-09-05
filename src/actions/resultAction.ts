import { z } from "zod";
import { createBaseAction } from "./baseAction";

export const resultAction = createBaseAction(
  "resultAction",
  "This function is called at the end when the initial instructions asked to perform an action.",
  {
    type: "object",
    properties: {},
  },
  z.object({}),
  async () => {
    return null;
  }
);
