import * as selectors from "../selectors/HomePage.selectors.js.js";

export async function clickApplicationLink() {
  let link = await $$(selectors.applicationLink);
  await link[5].scrollIntoView();
  await link[5].waitForDisplayed();
  await link[5].click();
}

export async function clickingFormButton() {
  let link = await $$(selectors.formButton);
  await link[1].scrollIntoView();
  await link[1].waitForExist();
  await link[1].click();
}

export async function clickingPractiseFormButton() {
  let link = await $(selectors.practiseFormButton);
  await link.scrollIntoView();
  await link.waitForExist();
  await link.click();
}
