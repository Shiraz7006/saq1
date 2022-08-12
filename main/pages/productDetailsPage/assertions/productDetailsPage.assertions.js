import assertion from "soft-assert";
import * as selectors from "../selectors/productDetailsPage.selectors.js";

export async function checkAssert(data) {
  let bookDetails = await $$(selectors.details);
  console.log(data);
  console.log(data.Author);
  await bookDetails[0].waitForDisplayed();
  const ISBNDisplayed = await bookDetails[0].getText();

  await bookDetails[1].waitForDisplayed();
  const titleDisplayed = await bookDetails[1].getText();

  await bookDetails[2].waitForDisplayed();
  const subTitleDisplayed = await bookDetails[2].getText();

  await bookDetails[3].waitForDisplayed();
  const authorDisplayed = await bookDetails[3].getText();

  await bookDetails[4].waitForDisplayed();
  const publisherDisplayed = await bookDetails[4].getText();

  await bookDetails[5].waitForDisplayed();
  const totalPagesDisplayed = await bookDetails[5].getText();

  assertion.softContains(
    ISBNDisplayed,
    data.ISBN,
    "Wrong product is selected",
    []
  );
  assertion.softContains(
    titleDisplayed,
    data.Title,
    "Wrong product is selected",
    []
  );
  assertion.softContains(
    subTitleDisplayed,
    data.sub_Title,
    "Wrong product is selected",
    []
  );
  assertion.softContains(
    authorDisplayed,
    data.Author,
    "Wrong product is selected",
    []
  );
  assertion.softContains(
    publisherDisplayed,
    data.Publisher,
    "Wrong product is selected",
    []
  );
  assertion.softContains(
    totalPagesDisplayed,
    data.Total_Pages,
    "Wrong product is selected",
    []
  );
  assertion.softAssertAll();
}
