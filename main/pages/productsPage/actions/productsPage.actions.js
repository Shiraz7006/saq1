import * as selectors from "../selectors/productsPage.selectors.js";

export async function clickingBook() {
  let link = await $(selectors.learningJavascriptBook);
  await link.scrollIntoView();
  await link.waitForDisplayed();
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
