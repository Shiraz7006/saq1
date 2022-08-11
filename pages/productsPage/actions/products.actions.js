import * as selectors from "../../../selectors/myAllSelectors.js";

export async function clickingBook() {
  let link = await $(selectors.learningJavascriptBook);
  await link.scrollIntoView();
  await link.waitForDisplayed();
  await link.click();
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

export async function searchingBook() {
  let searchTextBox = await $(selectors.searchField);
  let searchButton = await $(selectors.searchButton);
  let input = "Learning JavaScript";
  await searchTextBox.clearValue();
  await searchTextBox.addValue(input);
  await searchButton.click();
}
