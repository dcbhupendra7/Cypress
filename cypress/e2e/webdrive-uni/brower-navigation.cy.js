describe("Validate webdriver homepage links", () => {
  it("Confirm links redirect to the correct pages", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    cy.url().should("include", "contactus");
    cy.go("back");
    cy.url().should("include", "http://www.webdriveruniversity.com/");
    cy.go("forward");
    cy.url().should("include", "contactus");
    cy.reload();
    cy.reload(true); //Reload without cache
    cy.go("back");
    //Remove attribute used to remove the target element
    cy.get("#login-portal")
      .invoke("removeAttr", "target")
      .click({ force: "true" });
    cy.url().should("include", "Login-Portal");
    cy.go("back");
    cy.get("#to-do-list")
      .invoke("removeAttr", "target")
      .click({ force: "true" });
    cy.url().should("include", "To-Do-List");
    cy.go("back");
  });
});
