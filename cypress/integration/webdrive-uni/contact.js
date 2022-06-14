describe("Test case for web driver contact us page", () => {
  it("Should sumbit contact us details for webdriver page", () => {
    // cy.visit("http://www.webdriveruniversity.com/");
    // cy.get("#contact-us").should("exist").click();
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get('[name="first_name"]').should("exist").type("Bhupendra");
    cy.get('[name="last_name"]').should("exist").type("Dangi");
    cy.get('[name="email"]').should("exist").type("bhupendradangi@gmail.com");
    cy.get('[name="message"]')
      .should("exist")
      .type("Hello, How are you doing?");
    cy.get('[type="submit"]').should("exist").click();
    cy.contains("Thank You for your Message!");
    cy.log("Successfully submitted.");
  });
});
