/// <reference types="cypress" />

import { MainShopPage } from '../pages/MainPage';
import { TripsOffers } from '../pages/ProductsPage';

const mainPage = {
    tabs: new MainShopPage()
};
const productsPage = {
    tripsOffers: new TripsOffers()
}


describe('FakeSkleptest ', () => {
    beforeEach(() => {
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
        productsPage.tripsOffers.clickAddToCArtButton('Windsurfing w Lanzarote');

       
        
        


        
    });
});

