describe("Test case for web driver contact us page", () => {
  before(() => {
    cy.fixture("example").then((data) => {
      // this.data = data;
      globalThis.data = data;
    });
  });
  it("Should sumbit contact us details for webdriver page", () => {
    // cy.visit("http://www.webdriveruniversity.com/");
    // cy.get("#contact-us").should("exist").click();
    // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    // cy.document().should("have.property", "name").and("eq", "author");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");
    cy.get('[name="first_name"]').should("exist").type(data.first_name);
    cy.get('[name="last_name"]').should("exist").type(data.last_name);
    cy.get('[name="email"]').should("exist").type(data.email);
    cy.get('[name="message"]').should("exist").type(data.body);
    cy.get('[type="submit"]').should("exist").click();
    cy.contains("Thank You for your Message!");
    cy.log("Successfully submitted.");
  });
});
