Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function () {
    cy.get('#firstName').type('Felipe')
    cy.get('#lastName').type('Ratazana')
    cy.get('#email').type('gustavo@mail.com')
    cy.get('#phone').type('83991118882')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()

})