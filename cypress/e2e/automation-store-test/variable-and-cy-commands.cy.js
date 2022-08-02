///<reference types= "cypress"/>
describe("Verifying variables, cypress commands and jquery commands", () => {
  it("Navigating to specific product pages", () => {
    cy.visit("https://automationteststore.com/");
    //Failed scenario
    /* const makeupLink = cy
      .get("a[href*='product/category&path=']")
      .contains("Makeup");
    const skincareLink = cy
      .get("a[href*='product/category&path=']")
      .contains("Skincare");
    makeupLink.click();
    skincareLink.click(); */
    /* Working scenario
    const makeupLink = cy
      .get("a[href*='product/category&path=']")
      .contains("Makeup");
    makeupLink.click();
    const skincareLink = cy
      .get("a[href*='product/category&path=']")
      .contains("Skincare");
    skincareLink.click(); */
    //Recommended approach
    cy.get("a[href*='product/category&path=']").contains("Makeup").click();
    cy.get("a[href*='product/category&path=']").contains("Skincare").click();
  });
  it("Checking Header text for makeup page", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Makeup").click();
    cy.get("h1 .maintext").then(($headerText) => {
      const headerText = $headerText.text();
      console.log("Value of header text is: " + headerText);
      expect(headerText).is.eq("Makeup");
    });
  });
  it.only("Validate properties of Contact Us Page", () => {
    cy.visit("https://automationteststore.com/index.php?rt=content/contact");

    //Uses cypress commands and chaining
    cy.contains("#ContactUsFrm", "Contact Us Form")
      .find("#field_11")
      .should("contain", "First name");
    cy.contains("#ContactUsFrm", "Contact Us Form")
      .find("#field_12")
      .should("contain", "Email");
    cy.contains("#ContactUsFrm", "Contact Us Form")
      .find("#field_13")
      .should("contain", "Enquiry");
    //JQery Approach
    cy.contains("#ContactUsFrm", "Contact Us Form").then((text) => {
      const firstNextText = text.find("#field_11").text();
      expect(firstNextText).to.contain("First name");

      //Embedded commands (Closure)
      cy.get("#field_11").then((fnText) => {
        cy.log(fnText.text());
        cy.log(fnText);
      });
    });
  });
});
