describe("Double click test", () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

  beforeEach(() => {
    cy.visit(`${Cypress.env("demoPage")}/buttons`);
  });

  //Double clicks the button and a text should appear afterwards
  it("Double Click Test", () => {
    cy.get("#doubleClickBtn").dblclick();
    cy.get("#doubleClickMessage").should(
      "have.text",
      "You have done a double click"
    );
  });

  //Right clicks the button and a text should appear afterwards
  it("Right Click Test", () => {
    cy.get("#rightClickBtn").rightclick();
    cy.get("#rightClickMessage").should(
      "have.text",
      "You have done a right click"
    );
  });

});
