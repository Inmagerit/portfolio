
describe('check links', () => {
    it('check link one', () => {
      cy.visit('/src/index.html'); 
  
      cy.get('#link').click();
      
      
      cy.contains('See the API info').should('exist');
    });
      it('check link two', () => {
      cy.visit('/src/secondary.html'); 
  
      cy.get('#link').click();
      

      cy.contains('Welcome to my website').should('exist'); 
    });
  });
  
  
  
  
  