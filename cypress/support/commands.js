// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username) => {
cy.get('#username').type(username);
cy.get('#password').type('s3cret');
cy.get('[data-test="signin-submit"]').click()
})

Cypress.Commands.add('dataTest', (data_test) => {
    cy.get(`[data-test="${data_test}"]`)
})

Cypress.Commands.add('elementScrollRight', (element) => {
    // Click and hold the dot
    cy.get(element).trigger('mousedown', { button: 0 });
    // Move the dot to the right (adjust the number of pixels as needed)
    cy.get(element).trigger('mousemove', { clientX: 500, clientY: 0 });
    // Release the mouse button
    cy.get(element).trigger('mouseup', { force: true });
})

Cypress.Commands.add('transaction', () => {
    cy.get('[data-test^="user-list-item"]').first().should('be.visible').click()
    cy.get('#amount').click().type('8000')
    cy.get('#transaction-create-description-input').click().type('you bought my couch')
})