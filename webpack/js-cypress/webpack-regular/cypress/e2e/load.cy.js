describe('template spec', () => {
  it('Checks all elements are loaded', () => {
    cy.visit('/src/index.html');

    cy.get('*').should('exist');
   
  });
  it('Checks all elements are loaded', () => {
    cy.visit('/src/secondary.html');

    cy.get('*').should('exist');
   
  });

});
