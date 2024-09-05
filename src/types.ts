import { type TestType } from "@playwright/test";
import { RunnableFunctionWithParse } from "openai/lib/RunnableFunction";

export { type Page } from "@playwright/test";

export type Test = TestType<any, any>;

export type StepOptions = {
  debug?: boolean;
  model?: string;
  openaiApiKey?: string;
  openaiBaseUrl?: string;
  openaiDefaultQuery?: {};
  openaiDefaultHeaders?: {};
  strict?: boolean;
  externalActions?: Record<string, RunnableFunctionWithParse<any>>;
};

export type TaskMessage = {
  task: string;
  snapshot: {
    dom: string;
  };
  options?: StepOptions;
};

export type TaskResult = {
  assertion?: boolean;
  query?: string;
  errorMessage?: string;
};
