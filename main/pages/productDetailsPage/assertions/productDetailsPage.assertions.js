import assertion from "soft-assert";
import * as selectors from "../selectors/productDetailsPage.selectors.js";

export async function checkAssert(data) {
  let link = await $$(selectors.details);
  console.log(data);
  console.log(data.Author);
  await link[0].waitForDisplayed();
  const ISBN_1 = await link[0].getText();

  await link[1].waitForDisplayed();
  const Title_1 = await link[1].getText();

  await link[2].waitForDisplayed();
  const sub_Title_1 = await link[2].getText();

  await link[3].waitForDisplayed();
  const Author_1 = await link[3].getText();

  await link[4].waitForDisplayed();
  const Publisher_1 = await link[4].getText();

  await link[5].waitForDisplayed();
  const Total_Pages_1 = await link[5].getText();

  assertion.softContains(ISBN_1, data.ISBN, "Wrong product is selected", []);
  assertion.softContains(Title_1, data.Title, "Wrong product is selected", []);
  assertion.softContains(
    sub_Title_1,
    data.sub_Title,
    "Wrong product is selected",
    []
  );
  assertion.softContains(
    Author_1,
    data.Author,
    "Wrong product is selected",
    []
  );
  assertion.softContains(
    Publisher_1,
    data.Publisher,
    "Wrong product is selected",
    []
  );
  assertion.softContains(
    Total_Pages_1,
    data.Total_Pages,
    "Wrong product is selected",
    []
  );
  assertion.softAssertAll();
}
