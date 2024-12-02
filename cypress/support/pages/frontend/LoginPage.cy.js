class LoginPage {
    get usernameField() {
      return cy.get('#username')
    }
  
    get passwordField() {
      return cy.get('#password')
    }
  
    get loginButton() {
      return cy.get('#log-in')
    }
  
    get errorMessage() {
      return cy.get('.error-message')
    }
  }
  
  export default new LoginPage()