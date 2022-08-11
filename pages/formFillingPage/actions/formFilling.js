import * as selectors from "../../../selectors/myAllSelectors.js";
const path = require("path");

export async function formFilling() {
  let firstNameTextBox = await $(selectors.formFirstNameTextBox);
  let lastNameTextBox = await $(selectors.formLastNameTextBox);
  let emailTextBox = await $(selectors.formEmailTextBox);
  let genderMaleButton = await $(selectors.formGenderButton1);
  // let genderFemaleButton= $(selectors.formGenderButton2);
  // let genderOtherButton= $(selectors.formGenderButton3);
  let mobileNoTextBox = await $(selectors.formMobileNumberTextBox);
  let DOBTextBox = await $(selectors.formDOBTextBox);
  let subjectsTextBox = await $(selectors.formSubjectsTextBox);
  let hobbiesOption = await $$(selectors.formHobbiesButtons);
  let chooseFileOption = $(selectors.formChooseFile);
  let currentAddressOption = await $(selectors.formCurrentAddress);
  let stateCityOptions = await $$(selectors.formCityStateTextBox);

  let firstName = "Ali";
  let lastName = "ahmed";
  let email = "ahmed111@gmail.com";
  let gender = "Male";
  let mobileNumber = "3331234564";
  let DOB = "5 Sep 1999";
  let Subjects = "Pysics Chemistry";
  // let hobby= "Reading";
  let currentAddress = "xyz sector Islamabad";
  let city = "abc";
  let state = "xyz";

  await firstNameTextBox.scrollIntoView();
  await firstNameTextBox.waitForDisplayed();
  await firstNameTextBox.addValue(firstName);

  // await lastNameTextBox.scrollIntoView();
  // await lastNameTextBox.waitForDisplayed()
  // await lastNameTextBox.addValue(lastName);

  // await emailTextBox.scrollIntoView();
  // await emailTextBox.waitForDisplayed()
  // await emailTextBox.addValue(email);

  // await genderMaleButton.scrollIntoView();
  // await genderMaleButton.waitForDisplayed()
  // await genderMaleButton.click();

  // await mobileNoTextBox.scrollIntoView();
  // await mobileNoTextBox.waitForDisplayed()
  // await mobileNoTextBox.addValue(mobileNumber);

  // await DOBTextBox.scrollIntoView();
  // await DOBTextBox.waitForDisplayed()
  // await DOBTextBox.addValue(DOB);

  // await subjectsTextBox.scrollIntoView();
  // await subjectsTextBox.waitForDisplayed()
  // await subjectsTextBox.addValue(Subjects);

  // await hobbiesOption[0].scrollIntoView();
  // await hobbiesOption[0].waitForDisplayed()
  // await hobbiesOption[0].click();

  await choosefileOption.click();
  const filePath = await path.join(
    __dirname,
    "../../../tests/data/Cat+pic.jpg"
  );
  const remoteFilePath = await browser.uploadFile(filePath);
  await chooseFileOption.scrollIntoView();
  await chooseFileOption.waitForExist();
  await chooseFileOption.setValue(remoteFilePath);

  // await currentAddressOption.scrollIntoView();
  // await currentAddressOption.waitForDisplayed()
  // await currentAddressOption.addValue(currentAddress);

  // await stateCityOptions[0].scrollIntoView();
  // await stateCityOptions[0].waitForDisplayed()
  // await stateCityOptions[0].addValue(state);

  // await stateCityOptions[1].scrollIntoView();
  // await stateCityOptions[1].waitForDisplayed()
  // await stateCityOptions[1].addValue(city);
}
