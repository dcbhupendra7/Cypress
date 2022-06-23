///<reference types ="Cypress"/>
describe("Cypress limitation of opening different domains in same it", () => {
  it("Accesing two links in same page", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.visit("http://www.webdriveruniversity.com/");
  });
  it("Accesing two links in same page via user actions", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#automation-test-store").invoke("removeAttr", "target").click();
  });
});
