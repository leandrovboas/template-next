/// <reference types="cypress" />

describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('/');
    // The new page should contain an h1 with "About page"
    cy.get('h1').contains('Olá mundo');
  });
});
