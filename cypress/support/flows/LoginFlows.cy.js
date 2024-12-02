import LoginActions from '../actions/LoginActionsElements.cy'

class LoginFlow {
    loginWithCredentials(url, username, password) {
        LoginActions.visitLoginPage(url)
        LoginActions.fillUsername(username)
        LoginActions.fillPassword(password)
        LoginActions.submitLogin()
        LoginActions.assertLoginRedirect()
    }
}

export default new LoginFlow()