class AutoStore_Homepage_PO {
  accessHomePage() {
    cy.visit("https://automationteststore.com/");
  }
  clickOn_HairCare() {
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  }
}
export default AutoStore_Homepage_PO;
