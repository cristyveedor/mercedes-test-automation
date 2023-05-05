/// <reference types="Cypress" />

// Import commands.js using ES2015 syntax:
import './commands';

// clear cookies before each test
beforeEach(() => {
  // cy.clearCookies();
});

Cypress.on('uncaught:exception', (err) => {
  return false;
});
