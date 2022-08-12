import * as selectors from "../selectors/HomePage.selectors.js";

export async function clickApplicationLink() {
  let interfaceCards = await $$(selectors.applicationLink);
  await interfaceCards[5].scrollIntoView();
  await interfaceCards[5].waitForDisplayed();
  await interfaceCards[5].click();
}

export async function clickingFormButton() {
  let interfaceButtons = await $$(selectors.formButton);
  await interfaceButtons[1].scrollIntoView();
  await interfaceButtons[1].waitForExist();
  await interfaceButtons[1].click();
}

export async function clickingPractiseFormButton() {
  let practiseFormButton = await $(selectors.practiseFormButton);
  await practiseFormButton.scrollIntoView();
  await practiseFormButton.waitForExist();
  await practiseFormButton.click();
}
