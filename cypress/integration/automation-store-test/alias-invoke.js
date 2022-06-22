///<reference types='cypress'/>
describe("Use of Alias and Invoke", () => {
  it("Implement alias and invoke in hair care page", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    cy.get(".fixed_wrapper .prdocutname")
      .eq("0")
      .invoke("text")
      .as("nameOfProduct");
    cy.get("@nameOfProduct").its("length").should("be.gt", 5);
    cy.get("@nameOfProduct").should("include", "Seaweed Conditioner");
  });
  it("Implement alias and invoke in skin care page", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Skincare").click();
    cy.get(".fixed_wrapper .prdocutname")
      .eq("0")
      .invoke("text")
      .as("nameOfSkinProduct");
    cy.get("@nameOfSkinProduct").its("length").should("be.gt", 6);
    cy.get("@nameOfSkinProduct").should("include", "Flash Bronzer Body Gel");
  });
  it.only("Impolement alias and invoke Home page", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail").as("lenghtOfHomePageProduct");
    cy.get("@lenghtOfHomePageProduct").should("have.length", 16);
    cy.get("@lenghtOfHomePageProduct")
      .find(".productcart")
      .invoke("attr", "title")
      .should("include", "Add to Cart");
  });
});
