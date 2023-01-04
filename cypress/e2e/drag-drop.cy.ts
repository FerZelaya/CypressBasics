//Drag and dropt test
describe("Drag and Drop test", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoPage")}/droppable`);
  });

  //Gets the draggable element then drags it to an specific element. Asserts it should have a new text and new background color
  it("Drag and Drop Demo", () => {
    cy.get("#draggable").drag("#droppable", { force: true });

    cy.get("#droppable").find("p").should("have.text", "Dropped!");

    cy.get("#droppable").should(
      "have.css",
      "background-color",
      "rgb(70, 130, 180)",
    );
  });
});
