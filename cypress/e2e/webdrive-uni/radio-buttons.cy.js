describe("Verify radio buttons via webuni", () => {
  before(() => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
  });
  it("Check specific radio button", () => {
    cy.get("#radio-buttons").find("[type='radio']").as("button-value");
    cy.get("@button-value").eq(1).check().should("be.checked");
  });
  it("Validate state of radio buttons", () => {
    cy.get("input[value='lettuce']").should("be.not.checked");
    cy.get("input[value='cabbage']").should("be.disabled");
    cy.get("input[value='pumpkin']").should("be.checked");
  });
});
