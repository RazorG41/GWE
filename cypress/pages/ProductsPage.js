/// <reference types="cypress" />

export class TripsOffers {
    elements = {
    }
    buttons = {
        addToCartButton: () => cy.get('[data-product_sku]').eq(0)
    }
    clickAddToCArtButton() {
        this.buttons.addToCartButton()
            .click()
    }
}
