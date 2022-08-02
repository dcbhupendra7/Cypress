describe("This is the test for inspecting the items", () => {
  it("Click on first product using item header", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get(
      "#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed"
    ).click();
  });
  it.only("Click on first product using item class", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get(".prdocutname")
      .contains("Skinsheen Bronzer Stick")
      .click()
      .then((itemHeader) => {
        console.log("Select the item from selector " + itemHeader.text());
      });
  });
  it("Click on first product using index", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get(".fixed_wrapper ").find(".prdocutname").eq("1").click();
  });
});
