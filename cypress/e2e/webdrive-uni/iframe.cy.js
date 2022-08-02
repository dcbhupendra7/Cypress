describe("Test case for web driver iframe", () => {
  it("Use of iframe", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#iframe").invoke("removeAttr", "target").click({ force: true });
    cy.get("#frame").then(($iframe) => {
      const body = $iframe.contents().find("body");
      cy.wrap(body).as("iframe");
    });
    cy.get("@iframe").find("#button-find-out-more").click();
    cy.get("@iframe").find("#myModal").as("modalText");
    cy.get("@modalText").should(($Modaltext) => {
      const value = $Modaltext.text();
      expect(value).to.include("Welcome to webdriveruniversity.com");
    });
    cy.get("@modalText").contains("Close").click();
  });
});
