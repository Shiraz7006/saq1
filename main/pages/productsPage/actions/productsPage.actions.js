import * as selectors from "../selectors/productsPage.selectors.js";

export async function searchBook() {
  let searchTextBox = await $(selectors.getSearchField);
  let searchButton = await $(selectors.getSearchButton);
  let input = "Learning JavaScript";
  await searchTextBox.clearValue();
  await searchTextBox.addValue(input);
  await searchButton.click();
}
export async function clickBook() {
  let bookLink = await $(selectors.getLearningJavascriptBookLink);
  await bookLink.scrollIntoView();
  await bookLink.waitForDisplayed();
  await bookLink.click();
}
