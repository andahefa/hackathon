import LoginElements from '../../support/pages/frontend/loginPage.cy';

class LoginActions {

    visitLoginPage(url) {
        const loginUrl = url || Cypress.env('LOGIN_URL');
        cy.visit(loginUrl);
    }

    fillUsername(username) {
        const user = username || Cypress.env('USERNAME');
        LoginElements.usernameField.type(user);
    }

    fillPassword(password) {
        const pass = password || Cypress.env('PASSWORD');
        LoginElements.passwordField.type(pass);
    }

    submitLogin() {
        LoginElements.loginButton.click();
    }

    assertLoginRedirect(expectedUrl) {
        const redirectUrl = expectedUrl || Cypress.env('REDIRECT_URL');
        cy.url().should('include', redirectUrl);
    }

    assertErrorMessage() {
        LoginElements.errorMessage.should('be.visible');
    }
}

export default new LoginActions();
