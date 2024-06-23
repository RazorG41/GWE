/// <reference types="cypress" />

export class MainShopPage {
    elements = {
        storeTab: () => cy.get('[id="menu-item-198"]'),
        categoriess: () => cy.get ('[class*="woocommerce-loop-category__title"]').eq(0),
    }

    clickTab() {
        this.elements.storeTab()
            .click();
    }

    clickCategories() {
        this.elements.categoriess()
        .eq(0)
        .click();
    }
}





