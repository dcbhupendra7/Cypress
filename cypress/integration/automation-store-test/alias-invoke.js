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
  it("Implement alias and invoke Home page", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail").as("lenghtOfHomePageProduct");
    cy.get("@lenghtOfHomePageProduct").should("have.length", 16);
    cy.get("@lenghtOfHomePageProduct")
      .find(".productcart")
      .invoke("attr", "title")
      .should("include", "Add to Cart");
  });
  it.only("Implement alias and invoke to itirate through sell price", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail").find(".oneprice").invoke("text").as("itemPrice");
    cy.get(".thumbnail").find(".pricenew").invoke("text").as("saleItemPrice");
    var totalSum = 0;
    cy.get("@itemPrice").then(($el) => {
      var nonSaleItem = $el.split("$");
      var i;
      var nonSaleItemSum = 0;
      for (i = 0; i < nonSaleItem.length; i++) {
        cy.log(nonSaleItem[i]);
        nonSaleItemSum += Number(nonSaleItem[i]);
      }
      totalSum += nonSaleItemSum;
      cy.log("Sum of non-sale product: " + nonSaleItemSum);
    });
    cy.get("@saleItemPrice")
      .then(($el) => {
        var saleProductPrice = $el.split("$");
        var i;
        var saleProductSum = 0;
        for (i = 0; i < saleProductPrice.length; i++) {
          cy.log(saleProductPrice[i]);
          saleProductSum += Number(saleProductPrice[i]);
        }
        cy.log("Sum of sale product: " + saleProductSum);
        totalSum += saleProductSum;
      })
      .then(() => {
        cy.log("Sum of sale product and non-sale product: " + totalSum);
        expect(totalSum).eq(648.5);
      });
  });
  it("Implement alias and invoke to itirate through sell price", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail").as("lenghtOfHomePageProduct");
    cy.get("@lenghtOfHomePageProduct");
    cy.get("@lenghtOfHomePageProduct")
      .find(".pricenew")
      .each(($el, index, $list) => {
        cy.log($el.text());
      });
  });
});
