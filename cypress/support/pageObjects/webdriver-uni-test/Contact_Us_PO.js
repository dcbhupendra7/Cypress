class Contact_Us_PO {
  contactForm_Submission(
    firstName,
    lastName,
    email,
    comments,
    $selector,
    textToLocate
  ) {
    cy.get('[name="first_name"]').should("exist").type(firstName);
    cy.get('[name="last_name"]').should("exist").type(lastName);
    cy.get('[name="email"]').should("exist").type(email);
    cy.get('[name="message"]').should("exist").type(comments);
    cy.get('[type="submit"]').should("exist").click();
    cy.get($selector).wait(3000).contains(textToLocate, { timeout: 30000 });
  }
}
export default Contact_Us_PO;
