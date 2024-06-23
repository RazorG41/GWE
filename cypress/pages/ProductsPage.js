/// <reference types="cypress" />

export class TripsOffers {
    inputs = {
        searchProduct: () => cy.get('input[type="search"]')
    }
    buttons = {
        addToCartButton: () => cy.get('[data-product_sku]').eq(0),
        checkCartButton: ()=> cy.get('[class="added_to_cart wc-forward"]')
    }
    typeSearchProduct(text) {
        this.inputs.searchProduct().eq(0)
        .click()
        .type(text)
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
