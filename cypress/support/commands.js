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

Cypress.Commands.add("selectProduct", (productName) => {
  cy.get(".fixed_wrapper .prdocutname").each(($el, index, $li) => {
    if ($el.text().includes("Eau Parfumee au The Vert Shampoo")) {
      cy.wrap($el).click();
    }
  });
});

Cypress.Commands.add("addProductToBasket", (productName) => {
  cy.get(".fixed_wrapper .prdocutname").each(($el, index, $li) => {
    if ($el.text() === productName) {
      cy.log($el.text());
      cy.get(".productcart", { timeout: 5000 })
        .should("exist")
        .eq(index)
        .click();
    }
  });
});

Cypress.Commands.add(
  "webDriverUni_ContactForm_Submission",
  (firstName, lastName, email, comments, $selector, textToLocate) => {
    cy.get('[name="first_name"]').should("exist").type(firstName);
    cy.get('[name="last_name"]').should("exist").type(lastName);
    cy.get('[name="email"]').should("exist").type(email);
    cy.get('[name="message"]').should("exist").type(comments);
    cy.get('[type="submit"]').should("exist").click();
    cy.get($selector).contains(textToLocate);
  }
);
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import "cypress-file-upload";
