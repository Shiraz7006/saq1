import assertion from "soft-assert";
import * as selectors from "../selectors/productDetailsPage.selectors.js";

export async function checkAssert(data) {
  let bookDetails = await $$(selectors.details);
  console.log(data);
  console.log(data.Author);
  await bookDetails[0].waitForDisplayed();
  const ISBN_displayed = await bookDetails[0].getText();

  await bookDetails[1].waitForDisplayed();
  const Title_displayed = await bookDetails[1].getText();

  await bookDetails[2].waitForDisplayed();
  const sub_Title_displayed = await bookDetails[2].getText();

  await bookDetails[3].waitForDisplayed();
  const Author_displayed = await bookDetails[3].getText();

  await bookDetails[4].waitForDisplayed();
  const Publisher_displayed = await bookDetails[4].getText();

  await bookDetails[5].waitForDisplayed();
  const Total_Pages_displayed = await bookDetails[5].getText();

  assertion.softContains(
    ISBN_displayed,
    data.ISBN,
    "Wrong product is selected",
    []
  );
  assertion.softContains(
    Title_displayed,
    data.Title,
    "Wrong product is selected",
    []
  );
  assertion.softContains(
    sub_Title_displayed,
    data.sub_Title,
    "Wrong product is selected",
    []
  );
  assertion.softContains(
    Author_displayed,
    data.Author,
    "Wrong product is selected",
    []
  );
  assertion.softContains(
    Publisher_displayed,
    data.Publisher,
    "Wrong product is selected",
    []
  );
  assertion.softContains(
    Total_Pages_displayed,
    data.Total_Pages,
    "Wrong product is selected",
    []
  );
  assertion.softAssertAll();
}
