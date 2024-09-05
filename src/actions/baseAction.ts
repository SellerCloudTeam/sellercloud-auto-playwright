import { Page } from "@playwright/test";
import { RunnableFunctionWithParse } from "openai/lib/RunnableFunction";
import { z } from "zod";

export interface ActionContext {
  page: Page;
  strict: boolean;
  getLocator: (elementId: string) => any;
}

export type ActionFunction = (
  context: ActionContext
) => RunnableFunctionWithParse<any>;

export const createBaseAction = (
  name: string,
  description: string,
  parameters: object,
  parseSchema: z.ZodType<any>,
  func: (context: ActionContext, args: any) => Promise<any>
): ActionFunction => {
  return ({ page, strict, getLocator }) => ({
    strict,
    function: (args: any) => func({ page, strict, getLocator }, args),
    name,
    description,
    parse: (args: string) => parseSchema.parse(JSON.parse(args)),
    parameters,
  });
};
