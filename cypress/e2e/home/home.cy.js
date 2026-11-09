
describe('Airbnb - Home Page', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('TC001 - Deve carregar a página inicial', () => {

        cy.visit('/');

        // Validar domínio
        cy.location('hostname')
            .should('match', /(^|\.)airbnb\.com\.br$/);

        // Validar título da página
        cy.title()
            .should('not.be.empty');

        // Validar carregamento do conteúdo    
        cy.get('body')
            .should('be.visible');

        // Verifica se existe no DOM
        cy.get('main')
            .should('exist');

    });

});
