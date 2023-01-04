describe("Double click test", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoPage")}/buttons`);
  });

  it("Double Click Test", () => {
    // cy.get("#doubleClickBtn").dblclick();
    // cy.get("#doubleClickMessage").should(
    //   "have.text",
    //   "You have done a double click"
    // );
  });
//   it("Right Click Test", () => {
//     cy.get("#rightClickBtn").rightclick();
//     cy.get("#rightClickMessage").should(
//       "have.text",
//       "You have done a right click"
//     );
//   });

});
