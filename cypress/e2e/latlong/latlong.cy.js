import LatLongPage from "../../pages/latlong";

beforeEach(() => {
    LatLongPage.goTo(Cypress.env('baseUrl'));
    LatLongPage.nav();
})

describe('LatLong tests', () => {

    it('Find Uruguay', () => {

        LatLongPage.findPlace('Uruguay')

    })

})