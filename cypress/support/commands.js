Cypress.Commands.add('fillMandatoryFieldsAndSubmit',() => {
    cy.log('Entrou no teste');
    cy.get('#firstName').type('Juliano');
    cy.get('#lastName').type('Iglesias');
    cy.get('#email').type('julianohenriqueiglesias@gmail.com');
    cy.get('#open-text-area').type('testando');
    cy.contains('button', 'Enviar').click();
}) 