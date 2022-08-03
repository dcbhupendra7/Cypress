/// <reference types="cypress" />
import HomePage_PO from "../../support/pageObjects/webdriver-uni-test/HomePage_PO";
import Contact_Us_PO from "../../support/pageObjects/webdriver-uni-test/Contact_Us_PO";
describe("Test case for web driver contact us page", () => {
  Cypress.config("defaultCommandTimeout", 60000);
  const contact_Us_PO = new Contact_Us_PO();
  const homePage_PO = new HomePage_PO();
  beforeEach(() => {
    homePage_PO.visitHomepage();
    homePage_PO.clickOnContactUsButton();
    // cy.pause();
  });
  before(() => {
    cy.fixture("example").then((data) => {
      cy.viewport(550, 750);
      // this.data = data;
      globalThis.data = data;
    });
  });
  it("Should sumbit contact us details for webdriver page", () => {
    contact_Us_PO.contactForm_Submission(
      data.first_name,
      data.last_name,
      data.email,
      "Hi !!!!",
      "h1",
      "Thank You for your Message!"
    );
  });
  it("Should not be able to sumbit contact us details for webdriver page", () => {
    contact_Us_PO.contactForm_Submission(
      data.first_name,
      data.last_name,
      "Hi!!!!!!",
      "body",
      "Error: Invalid email address"
    );
  });
});
