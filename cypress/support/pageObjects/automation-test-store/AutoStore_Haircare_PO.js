class AutoStore_Haircare_PO {
  accessHairCareProducts() {
    globalThis.data.productName.forEach((element) => {
      cy.addProductToBasket(element).then(() => {
        // debugger;
      });
    });
    cy.get(".dropdown-toggle > .fa").click().debug();
  }
}
export default AutoStore_Haircare_PO;
