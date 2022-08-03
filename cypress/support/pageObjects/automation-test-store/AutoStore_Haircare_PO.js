class AutoStore_Haircare_PO {
  accessHairCareProducts() {
    globalThis.data.productName.forEach((element) => {
      cy.addProductToBasket(element);
    });
    cy.get(".dropdown-toggle > .fa").click();
  }
}
export default AutoStore_Haircare_PO;
