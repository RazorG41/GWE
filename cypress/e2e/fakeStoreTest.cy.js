/// <reference types="cypress" />

import { MainShopPage } from '../pages/mainPage';
import { TripsOffers } from '../pages/productsPage';

const mainPage = {
    tabs: new MainShopPage()
};
const productsPage = {
    tripsOffers: new TripsOffers()
};

const TEST_DATA = {
    searchedProduct: 'Soon'
};

describe('FakeSkleptest ', () => {

    before(() => {
        cy.visit('https://fakestore.testelka.pl/')
    });
    
    it('Go to store tab', () => {
        cy.log("Should move to Windsurfing category") 
        mainPage.tabs.clickTab();
        mainPage.tabs.elements.categoriess()
            .contains("Windsurfing")
            .should('be.visible');
        mainPage.tabs.clickCategories();
        cy.log("Should add to cart Windsurfing trip ")
        productsPage.tripsOffers.buttons.checkCartButton()
            .should('not.exist')
        productsPage.tripsOffers.clickAddToCArtButton();
        productsPage.tripsOffers.buttons.checkCartButton()
            .should('be.visible')
        productsPage.tripsOffers.typeSearchProduct(TEST_DATA.searchedProduct);
        productsPage.tripsOffers.clickCheckCartButton();

    });
});
