describe('desafio klok', function(){

    it('Acessa um site', function(){{
        cy.visit('https://www.magazineluiza.com.br')
        cy.get('[data-testid="input-search"]').click().type('notebook dell')
        cy.get('[data-testid="search-submit"]').click()
    }})
})