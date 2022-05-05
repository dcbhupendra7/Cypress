describe("This is the test for contact us page of automation-store", () => {
  it("Should display and submit the details of contact us page", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get("a[href$='contact']").click();
    // cy.xpath("//a[contains(@href, 'contact')]").click();
    // cy.get("#ContactUsFrm_first_name").type("Bhupendra");
    cy.xpath("//input[contains(@id, 'ContactUsFrm_first_name')]").type(
      "Bhupendra"
    );
    // cy.get("#ContactUsFrm_email").type("bhupendradangi5@gmail.com");
    cy.xpath("//input[contains(@id, 'ContactUsFrm_email')]").type(
      "bhupendradangi5@gmail.com"
    );
    // cy.get("#ContactUsFrm_enquiry").type(
    //   "Sorry, i don't have any enquiry at the moment."
    // );
    cy.xpath("//textarea[@id = 'ContactUsFrm_enquiry']").type(
      "Sorry, i don't have any enquiry at the moment."
    );
    cy.get("button[title='Submit']").click();
    // cy.xpath("//button[@title='Submit']").click();
    cy.get(".mb40 > :nth-child(3)").should(
      "have.text",
      "Your enquiry has been successfully sent to the store owner!"
    );
  });
});
