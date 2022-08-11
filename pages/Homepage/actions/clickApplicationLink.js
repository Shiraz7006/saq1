import * as selectors from "../../../selectors/myAllSelectors.js";

export async function clickApplicationLink() {
  let link = await $$(selectors.applicationLink);
  await link[5].scrollIntoView();
  await link[5].waitForDisplayed();
  await link[5].click();
}
