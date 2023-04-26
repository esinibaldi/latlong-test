import LoginPage from "../../pages/login";

beforeEach(() => {
    LoginPage.goTo(Cypress.env('baseUrl'));
    LoginPage.nav('user/login');
})

const invalid_values = require('../../fixtures/login/invalid_values.json')

describe('Login tests', () => {

    it('Valid login', () => {
        LoginPage.login('', '');
    })

    invalid_values.forEach(element => {
        it('Invalid login ' + element.title, () => {
            LoginPage.invalidLogin(element.user, element.password)
        })

    });

})