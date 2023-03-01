
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

    it('envia o formuário com sucesso usando um comando customizado', function () {
        cy.fillMandatoryFieldsAndSubmit();
        cy.get('.success').should('be.visible');
    })

    it('seleciona um produto (YouTube) por seu texto', function () {
        cy.get('#product')
            .select('YouTube')
            .should('have.value', 'youtube');
    })

    it('seleciona um produto (Mentoria) por seu valor (value)', function () {
        cy.get('#product')
            .select('mentoria')
            .should('have.value', 'mentoria');
    })

    it('seleciona um produto (Blog) por seu índice', function () {
        cy.get('#product')
            .select(1)
            .should('have.value', 'blog');

    })

    it('marca o tipo de atendimento "Feedback"', function () {
        cy.get(':nth-child(4) > input')
            .check()
            .should('have.value', 'feedback');

    })

    it('marca cada tipo de atendimento', function () {
        cy.get('input[type="radio"]')
            .should('have.length', 3)
            .each(function ($radio) {
                cy.wrap($radio).check()
                cy.wrap($radio).should('be.checked');
            })
    })

    it('marcac ambos os checkboxes, depois desmarca o último', function () {
        cy.get('input[type="checkbox"]')
            .check()
            .should('be.checked')
            .last()
            .uncheck()
            .should('not.be.checked');
    })

    it('selecione um arquivo da pasta fixtures', function () {
        cy.get('input[type="file"]')
            .should('not.have.value')
            .selectFile('./cypress/fixtures/example.json')
            .should(function ($input) {
                expect($input[0].files[0].name).to.equal('example.json');
            })
    })

    it('seleciona um arquivo simulando um drag-and-drop', function () {
        cy.get('input[type="file"]')
            .should('not.have.value')
            .selectFile('./cypress/fixtures/example.json', { action: 'drag-drop' })
            .should(function ($input) {
                expect($input[0].files[0].name).to.equal('example.json');
            })
    })

    it('selecione um arquivo utilizando uma fixture para a qual foi dada um alias', function () {
        cy.fixture('example.json').as('sampleFile')
        cy.get('input[type="file"]')
            .selectFile('@sampleFile')
            .should(function ($input) {
                expect($input[0].files[0].name).to.equal('example.json');
            })
    })

    it('verifica que a politica de privacidade abre em outra página sem a necessidade de um clique', function () {
        cy.get('#privacy a').should('have.attr', 'target', '_blank')
    })

    it('acessa a página da política de privacidade removendo o target e então clicando no link', function () {
        cy.get('#privacy a')
            .invoke('removeAttr', 'target')
            .click()
        cy.contains('Talking About Testing')
            .should('be.visible');
    })
    
})


