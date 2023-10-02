/* eslint-disable no-undef */
describe("Home", () => {
  it("has navigation links", () => {
    cy.visit("/");
  });
});
describe("Store", () => {
  it("changes category on click", () => {
    cy.visit("/store");
    // cy.intercept("https://fakestoreapi.com/products/category/*").as(
    //   "getProducts"
    // );
    // cy.get(".category").each((category, i, l) => {
    //   category.click();
    //   cy.wait("@getProducts");
    //   console.log(i);
    // });
  });
});
