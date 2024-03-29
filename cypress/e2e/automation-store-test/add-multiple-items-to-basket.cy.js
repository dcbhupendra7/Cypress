/// <reference types="cypress" />
import AutoStore_Homepage_PO from "../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO";
import AutoStore_Haircare_PO from "../../support/pageObjects/automation-test-store/AutoStore_Haircare_PO";
describe("Add multiple items to basket", () => {
  const autoStore_Homepage_PO = new AutoStore_Homepage_PO();
  const autoStore_Haircare_PO = new AutoStore_Haircare_PO();
  before(() => {
    cy.fixture("product").then((data) => {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    cy.clearLocalStorage();
    cy.clearCookies();
    autoStore_Homepage_PO.accessHomePage();
    autoStore_Homepage_PO.clickOn_HairCare();
  });
  it("Add specific items to basket", () => {
    autoStore_Haircare_PO.accessHairCareProducts();
  });
});
