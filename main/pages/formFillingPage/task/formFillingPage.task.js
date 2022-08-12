import * as actions from "../actions/formFillingPage.actions.js";

export async function task(inputData) {
  await actions.fillingFirstName(inputData.firstName);
  await actions.fillingLastName(inputData.lastName);
  await actions.fillingEmail(inputData.Email);
  await actions.selectingGender(inputData.Gender);
  await actions.fillingMobileNo(inputData.MobileNo);
  await actions.fillingDOB(inputData.DateofBirth);
  await actions.choosingHobbies(inputData.Hobbies);
  await actions.uploadingFile();
  await actions.fillingCurrentAddress(inputData.CurrentAddress);
}
