import Navigation from './navigation'

class LatLongPage extends Navigation {

    get inputPlaceName() {return cy.get("#place")}
    get btnFind() {return cy.get("#btnfind")}
    get latitude() {return cy.get("#lat")}
    get longitude() {return cy.get("#lng")}

    findPlace(placeName){
        this.inputPlaceName.type(placeName);
        this.btnFind.click();
        cy.wait(5);
    }


}
export default new LatLongPage()