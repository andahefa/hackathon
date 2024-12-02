import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginActions from '../../support/actions/LoginActionsElements.cy';

Given('que estoy en la página de login', () => {
    LoginActions.visitLoginPage(String(Cypress.env('URL')));
});

When('ingreso usuario y contraseña validos', () => {
    LoginActions.fillUsername(String(Cypress.env('USERNAME')));
    LoginActions.fillPassword(String(Cypress.env('PASSWORD')));
    LoginActions.submitLogin();
});

Then('debería ser redirigido al tablero principal', () => {
    LoginActions.assertLoginRedirect(String(Cypress.env('REDIRECT_URL')));
});