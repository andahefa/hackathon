import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import UserApiPage from '../../support/pages/backend/UserApiPage.cy';
import CreateUserData from '../../support/dataBodyApis/createUser.cy';
import UpdateUserData from '../../support/dataBodyApis/updateUser.cy';

Given(/^los datos del nuevo usuario son "([^"]*)" y "([^"]*)"$/, (name, job) => {
  cy.wrap({ name, job }).as('userData');
});

When('creo el usuario con estos datos', function() {
  const userData = new CreateUserData(this.userData.name, this.userData.job);
  UserApiPage.validateCreationUser(userData.getUserCreationData());
});

Then('el usuario debería ser creado y verificado exitosamente', () => {
  cy.log('User created and verified successfully');
});

Given(/^los datos de actualización del usuario son "([^"]*)", "([^"]*)" y "([^"]*)"$/, (email, firstName, lastName) => {
  cy.wrap({ email, firstName, lastName }).as('updateUserData');
});

When('actualizo el usuario con estos datos', function() {
  const updateUserData = new UpdateUserData(this.updateUserData.email, this.updateUserData.firstName, this.updateUserData.lastName);
  UserApiPage.updateUser(updateUserData.getUpdateUserData());
});

Then('el usuario debería ser actualizado exitosamente', () => {
  cy.log('User created and verified successfully');
});
