import Navigation from './navigation'

class LoginPage extends Navigation {

    get inputEmail() {return cy.get("#email")}
    get inputPassword() {return cy.get("#password1")}
    get btnLogin() {return cy.get("button[title='Login']")}

    login(email, password){
        this.inputEmail.type('{backspace}'+email);
        this.inputPassword.type('{backspace}'+password);
        this.btnLogin.click();
    }

    validLogin(){
        this.login(email, password);
        cy.get('main > h5').should("exist")
    }

    invalidLogin(email, password){
        this.login(email, password)
        cy.get('main > h5').should("not.exist")
    }

}
export default new LoginPage()