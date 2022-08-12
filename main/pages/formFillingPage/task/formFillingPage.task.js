import * as actions from "../actions/formFillingPage.actions.js";

export async function fillPractiseForm(inputData) {
  await actions.fillFirstName(inputData.firstName);
  await actions.fillLastName(inputData.lastName);
  await actions.fillEmail(inputData.Email);
  await actions.selectGender();
  await actions.fillMobileNo(inputData.MobileNo);
  await actions.fillDOB(inputData.DateofBirth);
  await actions.chooseHobbies();
  await actions.uploadFile();
  await actions.fillCurrentAddress(inputData.CurrentAddress);
}
