// cypress/e2e/buttonsTests.cy.js
describe('Template Spec', () => {
  
it('Should click each button with the "btn-light" class on index.html', () => {
  cy.visit('/src/index.html');

  // Iterate over each button with the class 'btn-light'
  cy.get('#link').click()
      // Add more assertions as needed
    });

  


it('Should click each button with the "btn-light" class on secondary.html', () => {
  cy.visit('/src/secondary.html');

  // Iterate over each button with the class 'btn-light'
  cy.get('.btn').each((button, index) => {
    // Click on the button and alias it
    cy.wrap(button).click();
  });
});

})