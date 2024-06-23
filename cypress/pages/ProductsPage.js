/// <reference types="cypress" />

export class TripsOffers {
    elements = {
    }
    buttons = {
        addToCartButton: () => cy.get('[data-product_sku]').eq(0),
        checkCartButton: ()=> cy.get('[class="added_to_cart wc-forward"]')
    }
    clickAddToCArtButton() {
        this.buttons.addToCartButton()
            .click()
    }
    clickCheckCartButton() {
        this.buttons.checkCartButton()
            .click()
    }
}
