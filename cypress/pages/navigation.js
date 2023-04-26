import Page from './page'

class Navigation extends Page {

    nav(tab){
        cy.get('#myTopnav [href="/'+ tab +'"]').click();
    }

}
export default Navigation