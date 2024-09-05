import { Page } from "@playwright/test";
import { RunnableFunctionWithParse } from "openai/lib/RunnableFunction";
import {
  expectNotToBe,
  expectToBe,
  locateElement,
  locatorBlur,
  locatorBoundingBox,
  locatorCheck,
  locatorClear,
  locatorClick,
  locatorCount,
  locatorEvaluate,
  locatorFill,
  locatorGetAttribute,
  locatorInnerHTML,
  locatorInnerText,
  locatorInputValue,
  locatorIsChecked,
  locatorIsEditable,
  locatorIsEnabled,
  locatorIsVisible,
  locatorTextContent,
  locatorUncheck,
  pageGoto,
  resultAction,
  resultAssertion,
  resultError,
  resultQuery,
} from "./actions";

export const createActions = (
  page: Page,
  strict: boolean = false,
  externalActions: Record<string, RunnableFunctionWithParse<any>> = {}
): Record<string, RunnableFunctionWithParse<any>> => {
  const locatorMap = new Map();

  const getLocator = (elementId: string) => {
    const locator = locatorMap.get(elementId);
    if (!locator) {
      throw new Error('Unknown elementId "' + elementId + '"');
    }
    return locator;
  };

  const context = { page, strict, getLocator };

  const defaultActions = {
    locateElement: locateElement(context),
    locator_evaluate: locatorEvaluate(context),
    locator_getAttribute: locatorGetAttribute(context),
    locator_innerHTML: locatorInnerHTML(context),
    locator_innerText: locatorInnerText(context),
    locator_textContent: locatorTextContent(context),
    locator_inputValue: locatorInputValue(context),
    locator_blur: locatorBlur(context),
    locator_boundingBox: locatorBoundingBox(context),
    locator_check: locatorCheck(context),
    locator_uncheck: locatorUncheck(context),
    locator_isChecked: locatorIsChecked(context),
    locator_isEditable: locatorIsEditable(context),
    locator_isEnabled: locatorIsEnabled(context),
    locator_isVisible: locatorIsVisible(context),
    locator_clear: locatorClear(context),
    locator_click: locatorClick(context),
    locator_count: locatorCount(context),
    locator_fill: locatorFill(context),
    page_goto: pageGoto(context),
    expect_toBe: expectToBe(context),
    expect_notToBe: expectNotToBe(context),
    resultAssertion: resultAssertion(context),
    resultQuery: resultQuery(context),
    resultAction: resultAction(context),
    resultError: resultError(context),
  };

  return {
    ...defaultActions,
    ...externalActions,
  };
};
