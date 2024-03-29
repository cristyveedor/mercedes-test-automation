/// <reference types="Cypress" />

//Mercedes
Cypress.Commands.add('visitHomepage', () => {
  cy.visit('/');
});

Cypress.Commands.add('closeCookiebanner', () => {
  cy.get('cmm-cookie-banner')
    .shadow()
    .find('[data-test="handle-accept-all-button"]')
    .eq(0)
    .click({ force: true });
});

Cypress.Commands.add('header', () => {
  cy.get('owc-header').shadow();
});

Cypress.Commands.add('multiSelectButton', () => {
  cy.get('owcc-car-configurator').shadow().get('ccwb-multi-select').shadow();
});

Cypress.Commands.add('carList', () => {
  cy.get('owcc-car-configurator').shadow().get('ccwb-card');
});
