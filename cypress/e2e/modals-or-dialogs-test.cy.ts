//Test if the modal is showing correctly

describe("Drag and Drop test", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoPage")}/modal-dialogs`);
  });

  //Clicks the show modal button and asserts a dialog should be visible. Then, it clicks the Close modal button and asserts is should not be visible
  it("Modal/Dialog test", () => {
    cy.get("#showSmallModal").click({ force: true });
    cy.get(`div[role="dialog"]`).should("exist").should("be.visible");

    cy.get(".modal-content").find("#closeSmallModal").click({ force: true });
    cy.get(`div[role="dialog"]`).should("not.exist");
  });
});
