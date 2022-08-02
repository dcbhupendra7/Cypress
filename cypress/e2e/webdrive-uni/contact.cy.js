/// <reference types="cypress" />

describe("Test case for web driver contact us page", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("web_driverUniHome" + "/Contact-Us/contactus.html"));
    // cy.document().should("have.property", "charset").and("eq", "UTF-8");
    // cy.title().should("include", "WebDriver | Contact Us");
    // cy.url().should("include", "contactus");
  });
  before(() => {
    cy.fixture("example").then((data) => {
      // this.data = data;
      globalThis.data = data;
    });
  });
  it("Should sumbit contact us details for webdriver page", () => {
    cy.webDriverUni_ContactForm_Submission(
      Cypress.env("first_name"),
      Cypress.env("last_name"),
      Cypress.env("email"),
      Cypress.env("message"),
      "h1",
      "Thank You for your Message!"
    );
  });
  it("Should not be able to sumbit contact us details for webdriver page", () => {
    cy.webDriverUni_ContactForm_Submission(
      Cypress.env("first_name"),
      Cypress.env("last_name"),
      " ",
      Cypress.env("message"),
      "body",
      "Error: Invalid email address"
    );
  });
});
