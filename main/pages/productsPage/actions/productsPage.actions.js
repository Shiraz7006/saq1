import * as selectors from "../selectors/productsPage.selectors.js";

export async function searchingBook() {
  let searchTextBox = await $(selectors.searchField);
  let searchButton = await $(selectors.searchButton);
  let input = "Learning JavaScript";
  await searchTextBox.clearValue();
  await searchTextBox.addValue(input);
  await searchButton.click();
}
export async function clickingBook() {
  let book_link = await $(selectors.learningJavascriptBook);
  await book_link.scrollIntoView();
  await book_link.waitForDisplayed();
  await book_link.click();
}
