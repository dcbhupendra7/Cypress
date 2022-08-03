describe("Verify checkboxes via webuni", () => {
  beforeEach(() => {
    cy.navigateTO_webdriverUni_radioButton();
  });
  it("Check and validate chckboxes", () => {
    // cy.get("#checkboxes > :nth-child(1) > input").check().should("be.checked");
    cy.get("#checkboxes > :nth-child(1) > input").as("option-1");
    cy.get("@option-1").check().should("be.visible");
  });
  it("Uncheck the checked checkboxes", () => {
    cy.get(":nth-child(5) > input").as("option-5");
    cy.get("@option-5").uncheck();
    cy.get("@option-5").uncheck().should("not.be.checked");
  });
  it("check the multiple checkboxes", () => {
    cy.get("input[type='checkbox']").check().should("be.checked");
  });
});
