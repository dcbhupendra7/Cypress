describe("Test case for web driver contact us page", () => {
  beforeEach(() => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");
  });
  before(() => {
    cy.fixture("example").then((data) => {
      // this.data = data;
      globalThis.data = data;
    });
  });
  it("Should sumbit contact us details for webdriver page", () => {
    cy.webDriverUni_ContactForm_Submission(
      data.first_name,
      data.last_name,
      data.email,
      data.body,
      "h1",
      "Thank You for your Message!"
    );
  });
  it("Should not be able to sumbit contact us details for webdriver page", () => {
    cy.webDriverUni_ContactForm_Submission(
      data.first_name,
      data.last_name,
      " ",
      data.body,
      "body",
      "Error: Invalid email address"
    );
  });
});
