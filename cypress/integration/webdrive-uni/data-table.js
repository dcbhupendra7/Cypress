/// <reference types="Cypress" />
describe("Handling data via webuni", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  });
  it("Calculate and assert total age of all users", () => {
    var userDetails = [];
    var num = 0;
    cy.get("#thumbnail-1 td")
      .each(($el, index, $list) => {
        userDetails[index] = $el.text();
      })
      .then(() => {
        var i;
        for (i = 0; i < userDetails.length; i++) {
          if (Number(userDetails[i])) {
            num += Number(userDetails[i]);
          }
          //   cy.log(userDetails[i]);
        }
        cy.log("Total age of the users are: " + num);
        expect(num).to.eq(322);
      });
  });
  it.only("Calculate and assert the age of a user based on last name", () => {
    cy.get("#thumbnail-1 tr td:nth-child(2)").each(($el, index, $list) => {
      const text = $el.text();
      if (text.includes("Woods")) {
        cy.get("#thumbnail-1 tr td:nth-child(2)")
          .eq(index)
          .next()
          .then((age) => {
            const userAge = age.text();
            expect(userAge).to.eq("80");
          });
      }
    });
  });
});
