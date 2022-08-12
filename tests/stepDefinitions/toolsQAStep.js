import { Given, When, Then } from "cucumber";
import * as homePageActions from "../../main/pages/HomePage/actions/HomePage.actions.js";
import { checkAssert } from "../../main/pages/productDetailsPage/assertions/productDetailsPage.assertions.js";
import { formFillingTask } from "../../main/pages/formFillingPage/task/formFillingPage.task.js";
import * as productsPage from "../../main/pages/productsPage/actions/productsPage.actions.js";

Given("A web browser is at the given link", async () => {
  await browser.url("/");
});

When("the user clicks the book store application", async () => {
  await homePageActions.clickApplicationLink();
});

When("the user searches for book from the search bar", async () => {
  await productsPage.searchingBook();
});

When("the user clicks the book", async () => {
  await productsPage.clickingBook();
});

Then(
  /^the user verifies that correct book details are shown on the webpage$/,
  async function (table) {
    const data = table.rowsHash();
    await checkAssert(data);
  }
);

Given("A web browser is at the given page", async () => {
  await browser.url("/");
});

When("the user clicks the forms button", async () => {
  await homePageActions.clickingFormButton();
});

When("the user selects practise form", async () => {
  await homePageActions.clickingPractiseFormButton();
});

When(/^the text data is filled by the user$/, async function (table) {
  const inputData = table.rowsHash();
  await formFillingTask(inputData);
});
