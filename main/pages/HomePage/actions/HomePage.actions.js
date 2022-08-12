import * as selectors from "../selectors/HomePage.selectors.js";

export async function clickApplicationLink() {
  let interfaceCards = await $$(selectors.getApplicationLink);
  await interfaceCards[5].scrollIntoView();
  await interfaceCards[5].waitForDisplayed();
  await interfaceCards[5].click();
}

export async function clickFormButton() {
  let interfaceButtons = await $$(selectors.getFormButton);
  await interfaceButtons[1].scrollIntoView();
  await interfaceButtons[1].waitForExist();
  await interfaceButtons[1].click();
}

export async function clickPractiseFormButton() {
  let practiseFormButton = await $(selectors.getPractiseFormButton);
  await practiseFormButton.scrollIntoView();
  await practiseFormButton.waitForExist();
  await practiseFormButton.click();
}
