///<reference types ='Cypress'/>
describe("Mouse Scroll Down", () => {
  it("Scroll Element into View", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });
  });
  it("I should be abale to drag and frop box", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#draggable").trigger("mousedown", { which: 1 });
    cy.get("#droppable")
      .trigger("mousemove")
      .trigger("mouseup", { force: true });
  });
  it("I should be abale to double click", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#double-click").dblclick();
  });
  it.only("I should be abale to hold down left mouse click button", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#click-box")
      .trigger("mousedown", { which: 1 })
      .then(($element) => {
        expect($element).to.have.css("background-color", "rgb(0, 255, 0)");
      });
  });
});
