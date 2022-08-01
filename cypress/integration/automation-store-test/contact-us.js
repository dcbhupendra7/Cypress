describe("This is the test for contact us page of automation-store", () => {
  beforeEach(() => {
    cy.fixture("userDetails").as("user");
  });
  it("Should display and submit the details of contact us page", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get("a[href$='contact']")
      .click()
      .then((className) => {
        console.log("On clicking contact us: " + className.text());
      });
    // cy.xpath("//a[contains(@href, 'contact')]").click();
    cy.get("@user").then((user) => {
      cy.get("#ContactUsFrm_first_name").type(user.first_name);
      cy.get("#ContactUsFrm_email")
        .should("have.attr", "name", "email")
        .type(user.email);
    });

    // cy.xpath("//input[contains(@id, 'ContactUsFrm_first_name')]").type(
    //   "Bhupendra"

    // cy.xpath("//input[contains(@id, 'ContactUsFrm_email')]").type(
    //   "bhupendradangi5@gmail.com"
    // );
    cy.get("#ContactUsFrm_enquiry").type(
      "Sorry, i don't have any enquiry at the moment."
    );
    // cy.xpath("//textarea[@id = 'ContactUsFrm_enquiry']").type(
    //   "Sorry, i don't have any enquiry at the moment."
    // );
    cy.get(".col-md-6 > .btn").click();
    // cy.xpath("//button[@title='Submit']").click();
    cy.log("Hello how are you?");
  });
});
