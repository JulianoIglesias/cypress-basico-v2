
/// <reference types="Cypress" />



describe('Central de Atendimento ao Cliente TAT', function () {
    beforeEach(function () {
        cy.visit('./src/index.html');

    })

    it('Verifica o Título', function () {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
    })

    it('preenche os campos obrigatórios e envia o formulário', function () {
        cy.get('#firstName').type('Juliano');
        cy.get('#lastName').type('Iglesias');
        cy.get('#email').type('julianohenriqueiglesias@gmail.com');
        cy.get('#open-text-area').type('testando');
        cy.contains('button', 'Enviar').click();
        cy.get('.success').should('be.visible');
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function () {
        cy.get('#firstName').type('Juliano');
        cy.get('#lastName').type('Iglesias');
        cy.get('#email').type('julianohenriqueiglesias@gmail,com');
        cy.get('#open-text-area').type('testando');
        cy.contains('button', 'Enviar').click();
        cy.get('.error').should('be.visible');
    })

    it('campo telefone continua vazio quando preenchido com valor não-numérico', function () {
        cy.get('#phone')
            .type('asdcdasdas')
            .should('have.value', '');
    })

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function () {
        cy.get('#firstName').type('Juliano');
        cy.get('#lastName').type('Iglesias');
        cy.get('#email').type('julianohenriqueiglesias@gmail.com');
        cy.get('#phone-checkbox').check();
        cy.get('#open-text-area').type('testando');
        cy.contains('button', 'Enviar').click();
        cy.get('.error').should('be.visible');
    })

    it('preenche e limpa os campos nome, sobrenome, email e telefone', function () {
        cy.get('#firstName')
            .type('Juliano')
            .should('have.value', 'Juliano')
            .clear()
            .should('have.value', '');
        cy.get('#lastName')
            .type('Iglesias')
            .should('have.value', 'Iglesias')
            .clear()
            .should('have.value', '');
        cy.get('#email')
            .type('julianohenriqueiglesias@gmail.com')
            .should('have.value', 'julianohenriqueiglesias@gmail.com')
            .clear()
            .should('have.value', '');
        cy.get('#phone')
            .type('44998269684')
            .should('have.value', '44998269684')
            .clear()
            .should('have.value', '');
    })

    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function () {
        cy.contains('button', 'Enviar').click();
        cy.get('.error').should('be.visible');
    })

    it.only('envia o formuário com sucesso usando um comando customizado', function () {
        cy.fillMandatoryFieldsAndSubmit();
        cy.get('.success').should('be.visible');
    })

    it('seleciona um produto (YouTube) por seu texto', function(){
        cy.get('#product')
            .select('YouTube')
            .should('have.value', 'youtube');
    })

    it('seleciona um produto (Mentoria) por seu valor (value)', function(){
        cy.get('#product')
            .select('mentoria')
            .should('have.value', 'mentoria');
    })

    it('seleciona um produto (Blog) por seu índice', function(){
        cy.get('#product')
            .select(1)
            .should('have.value', 'blog');

    })

    it('marca o tipo de atendimento "Feedback"', function(){
        cy.get(':nth-child(4) > input')
        .check()
        .should('have.value', 'feedback');

    })

})
