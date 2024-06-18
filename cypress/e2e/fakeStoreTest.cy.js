



describe('FakeSkleptest ', () => {
    beforeEach(() => {
        cy.visit('https://fakestore.testelka.pl/')
    })

    it('Go to sklep tab', () => { 
        cy.get('[id="menu-item-198"]').click();
    });
});
