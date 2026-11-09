
describe('Airbnb - Home Page', () => {

  it('TC001 - Deve carregar a página inicial', () => {

    cy.visit('/');

    cy.location('hostname')
      .should('match', /(^|\.)airbnb\.com\.br$/);

    cy.get('body')
      .should('be.visible');

    cy.get('main')
      .should('exist');

  });

});
