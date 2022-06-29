describe("Interact with dropdown list via webdri uni", () => {
  it("Select specific value from dropdown list", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#dropdowm-menu-1").as("dropdowm-menu-1");
    cy.get("#dropdowm-menu-2").as("dropdowm-menu-2");
    cy.get("#dropdowm-menu-3").as("dropdowm-menu-3");
    //Selecting by attribute value
    cy.get("@dropdowm-menu-1").select("c#").should("have.value", "c#");
    cy.get("@dropdowm-menu-2").select("JUnit");

    //selecting by text value
    cy.get("@dropdowm-menu-3").select("JQuery").contains("JQuery");
    cy.get("@dropdowm-menu-2").select("maven").should("have.value", "maven");
    cy.get("@dropdowm-menu-2").select("TestNG").contains("TestNG");
  });
});
