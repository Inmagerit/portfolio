describe('Responsive Design Tests', () => {
    it('should look good on mobile', () => {
    cy.viewport('iphone-6');
    cy.visit('/src/index.html'); 
    cy.get('*').should('exist')
    
    cy.get('button').each((button) => {
        cy.wrap(button).should('be.visible').click();})
    });
  
    it('should look good on tablet', () => {
      cy.viewport('ipad-2');
      cy.visit('/src/index.html');
      cy.get('*').should('exist')
    
      cy.get('button').each((button) => {
          cy.wrap(button).should('be.visible').click();})
      ;
        //mas tests
    });
  
    it('should look good on desktop', () => {
      cy.viewport(1366, 768); 
      cy.visit('/src/index.html');
      cy.get('*').should('exist')
    
      cy.get('button').each((button) => {
          cy.wrap(button).should('be.visible').click();})
      ; 
      //mas tests
    });
    it('should look good on mobile', () => {
      cy.viewport('iphone-6');
      cy.visit('/src/secondary.html'); 
      cy.get('*').should('exist')
      
      cy.get('button').each((button) => {
          cy.wrap(button).should('be.visible').click();})
      });
    
      it('should look good on tablet', () => {
        cy.viewport('ipad-2');
        cy.visit('/src/secondary.html');
        cy.get('*').should('exist')
      
        cy.get('button').each((button) => {
            cy.wrap(button).should('be.visible').click();})
        ;
          //mas tests
      });
    
      it('should look good on desktop', () => {
        cy.viewport(1366, 768); 
        cy.visit('/src/secondary.html');
        cy.get('*').should('exist')
      
        cy.get('button').each((button) => {
            cy.wrap(button).should('be.visible').click();})
        ; 
        //mas tests
      });
  });
  