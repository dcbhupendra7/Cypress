describe("Test case for web driver contact us page", () => {
  it("Should sumbit contact us details for webdriver page", () => {
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get("input[name='first_name']").type("Bhupendra");
    cy.get("input[name='last_name']").type("Dangi");
    cy.get("input[name='email'][placeholder='Email Address']").type(
      "bhupendradangi@gmail.com"
    );
    cy.get("textarea[name='message'][placeholder='Comments']").type(
      "Hi, how are you?"
    );
    cy.get("input[value='SUBMIT']").click();
    cy.get("h1").should("have.text", "Thank You for your Message!");
  });
});
