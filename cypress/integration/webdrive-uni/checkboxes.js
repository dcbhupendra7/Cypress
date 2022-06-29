describe("Verify checkboxes via webuni", () => {
  it("Check and validate chckboxes", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    // cy.get("#checkboxes > :nth-child(1) > input").check().should("be.checked");
    cy.get("#checkboxes > :nth-child(1) > input").as("option-1");
    cy.get("@option-1").check().should("be.visible");
  });
  it("Uncheck the checked checkboxes", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get(":nth-child(5) > input").as("option-5");
    cy.get("@option-5").uncheck();
    cy.get("@option-5").uncheck().should("not.be.checked");
  });
  it.only("check the multiple checkboxes", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("input[type='checkbox']").check().should("be.checked");
  });
});