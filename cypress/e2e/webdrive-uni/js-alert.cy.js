describe("Test alter window", () => {
  it("Check alert message for alert page", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#button1").click();
    cy.on("window:alert", (string) => {
      expect(string).to.equal("I am an alert box!");
    });
  });
  it("Check alert message for along with button", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#button4").click();
    cy.on("window:confirm", (message) => {
      return true;
    });
    cy.get("#confirm-alert-text").contains("You pressed OK!");
  });
  it("Check alert message when clicking cancel button", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#button4").click();
    cy.on("window:confirm", (message) => {
      return false;
    });
    cy.get("#confirm-alert-text").contains("You pressed Cancel!");
  });
  it.only("Check alert message with stub", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });
    const stub = cy.stub();
    cy.on("window:confirm", stub);
    cy.get("#button4")
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith("Press a button!");
      })
      .then(() => {
        return true;
      })
      .then(() => {
        cy.get("#confirm-alert-text").contains("You pressed OK!");
      });
  });
});
