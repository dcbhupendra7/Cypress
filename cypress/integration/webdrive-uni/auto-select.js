/// <reference types="cypress" />

describe("Verify Autocomplete dropwdown lists via webdriveruni", () => {
  it("Select specific product via autocomplete list", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#autocomplete-textfield")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#myInput").as("inputField").type("A");

    cy.get("#myInputautocomplete-list > *")
      .each(($el, index, $list) => {
        const prod = $el.text();
        const productToSelect = "Avacado";

        if (prod === productToSelect) {
          // $el.click();
          $el.trigger("click");

          cy.get("#submit-button").as("submitButton").click();
          cy.url().should("include", "Avacado");
        }
      })
      .then(() => {
        cy.get("@inputField").type("g");

        cy.get("#myInputautocomplete-list > *").each(($el, index, $list) => {
          const prod = $el.text();
          const productToSelect = "Grapes";

          if (prod === productToSelect) {
            // $el.click();
            $el.trigger("click");

            cy.get("@submitButton").click();
            cy.url().should("include", "Grapes");
          }
        });
      });
  });
});
