import * as selectors from "../selectors/formFillingPage.selectors.js";
const path = require("path");

export async function fillFirstName(firstName) {
  let firstNameTextBox = await $(selectors.getFirstNameTextBox);
  await firstNameTextBox.scrollIntoView();
  await firstNameTextBox.waitForDisplayed();
  await firstNameTextBox.addValue(firstName);
}

export async function fillLastName(lastName) {
  let lastNameTextBox = await $(selectors.getLastNameTextBox);
  await lastNameTextBox.scrollIntoView();
  await lastNameTextBox.waitForDisplayed();
  await lastNameTextBox.addValue(lastName);
}

export async function fillEmail(email) {
  let emailTextBox = await $(selectors.getEmailTextBox);
  await emailTextBox.scrollIntoView();
  await emailTextBox.waitForDisplayed();
  await emailTextBox.addValue(email);
}

export async function selectGender() {
  let genderMaleButton = await $(selectors.getGenderButton1);
  let genderFemaleButton = await $(selectors.getGenderButton2);
  let genderOtherButton = await $(selectors.getGenderButton3);
  await genderMaleButton.scrollIntoView();
  await genderMaleButton.waitForDisplayed();
  await genderMaleButton.click();
}

export async function fillMobileNo(mobileNumber) {
  let mobileNoTextBox = await $(selectors.getMobileNumberTextBox);
  await mobileNoTextBox.scrollIntoView();
  await mobileNoTextBox.waitForDisplayed();
  await mobileNoTextBox.addValue(mobileNumber);
}

export async function chooseHobbies() {
  let hobbiesOption = await $(selectors.getHobbiesButtons);
  await hobbiesOption.scrollIntoView();
  await hobbiesOption.waitForDisplayed();
  await hobbiesOption.isSelected();
}

export async function fillDOB(DOB) {
  let DOBTextBox = await $(selectors.getDOBTextBox);
  await DOBTextBox.scrollIntoView();
  await DOBTextBox.waitForDisplayed();
  await DOBTextBox.clearValue();
  await DOBTextBox.waitForDisplayed();
  await DOBTextBox.addValue(DOB);
}

// export async function FillingSubjects(Subjects) {
//   let subjectsTextBox = await $(selectors.formSubjectsContainer);
//   await subjectsTextBox.scrollIntoView();
//   await subjectsTextBox.waitForDisplayed();
//   await subjectsTextBox.click();
//   await subjectsTextBox.setValue("ph");
//   await subjectsTextBox.waitForDisplayed();
//   await subjectsTextBox.selectByVisibleText(Subjects);
// }

export async function uploadFile() {
  let chooseFileOption = await $(selectors.getChooseFileButton);
  const filePath = path.join(__dirname, "../../../../data/Cat+pic.jpg");
  const remoteFilePath = await browser.uploadFile(filePath);
  await chooseFileOption.scrollIntoView();
  await chooseFileOption.waitForExist();
  await chooseFileOption.setValue(remoteFilePath);
}

export async function fillCurrentAddress(currentAddress) {
  let currentAddressOption = await $(selectors.getCurrentAddressTextBox);
  await currentAddressOption.scrollIntoView();
  await currentAddressOption.waitForDisplayed();
  await currentAddressOption.addValue(currentAddress);
}
