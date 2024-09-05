import 'cypress-axe';
describe('End-to-End Tests with Accessibility', () => {
    
  
    it('should navigate to the page and pass accessibility tests', () => {
    
      cy.visit('/src/index.html'); 
  
    
      cy.injectAxe();
      cy.checkA11y();
      
      
    });
    it('should navigate to the page and pass accessibility tests', () => {
    
      cy.visit('/src/secondary.html'); 
  
    
      cy.injectAxe();
      cy.checkA11y();
      
      //cy.get('your-selector').should('have.text', 'Expected Text');
    });
  /*  it('should navigate to another page and pass accessibility tests', () => {
      cy.visit('/another-page'); // Update with the path to the other page
  
      // Custom Cypress command for accessibility testing
      cy.injectAxe();
      cy.checkA11y();
  
      // Add your E2E test steps for the other page
      // ...
  
      // Make assertions based on your E2E scenarios
      // ...
    });
*/});
  