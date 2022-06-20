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
});
