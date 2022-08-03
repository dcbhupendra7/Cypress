/// <reference types="cypress" />

class HomePgae_PO {
  visitHomepage() {
    cy.visit("/");
  }
  clickOnContactUsButton() {
    cy.get("#contact-us").invoke("removeAttr", "target").click();
  }
}
export default HomePgae_PO;
