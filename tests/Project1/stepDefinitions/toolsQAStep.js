import { Given, When, Then } from "cucumber";
import { clickApplicationLink } from "../../../pages/HomePage/actions/clickApplicationLink.js";
import { checkAssert } from "../../../pages/productDetailsPage/assertions/checkingDetails.js";
import { formFilling } from "../../../pages/formFillingPage/actions/formFilling.js";
import * as productsPage from "../../../pages/productsPage/actions/products.actions.js";



Given("A web browser is at the given link", async () => {
  await browser.url("/");
});

When("the user clicks the book store application", async () => {
  await clickApplicationLink();
});

When("the user searches for book from the search bar", async () => {
  await productsPage.searchingBook();
});

When("the user clicks the book", async () => {
  await productsPage.clickingBook();
});

Then(/^the user verifies that correct book details are shown on the webpage$/,
  async function (table) {
    const data=table.rowsHash();
    await checkAssert(data);
  }
);

Given("A web browser is at the given page", async () => {
  await browser.url("/");
});

When("the user clicks the forms button", async () => {
  await productsPage.clickingFormButton();
});

When("the user selects practise form", async () => {
  await productsPage.clickingPractiseFormButton();
});

When("the text data is filled by the user", async () => {
  await formFilling();
});
