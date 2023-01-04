/*
  To run a test, delete the '.skip' method from each describe
*/

// Simple click to a button and asserting it should have a certain class and a certain background color after action
describe("Click test", () => {
  beforeEach(() => {
    cy.visit("/click");
  });

  it("class assertions", () => {
    cy.get("#badButton").click().should("have.class", "btn-success");
  });

  it("background assertion", () => {
    cy.get("#badButton")
      .click()
      .should("have.css", "background-color", "rgb(40, 167, 69)");
  });
});

//Selects a radio button and asserts the text
describe.skip("Radio Buttons test", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoPage")}/radio-button`);
  });

  it("Radio button 'Yes'", () => {
    cy.get("#yesRadio").click({ force: true }).should("be.checked");
    cy.get("div").find("p").should("have.text", "You have selected Yes");
  });

  it("Radio button 'Impressive'", () => {
    cy.get("#impressiveRadio").click({ force: true }).should("be.checked");
    cy.get("div").find("p").should("have.text", "You have selected Impressive");
  });
});

//Hover over button to show a tooltip
describe.skip("Tooltips hover test", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoPage")}/tool-tips`);
  });

  it("Tooltip hover", () => {
    cy.get("#toolTipButton").realHover();
    cy.get(".tooltip-inner").should("have.text", "You hovered over the Button");
  });
});

//Checks a checkbox and asserts a text
describe.skip("Checkboxes test", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoPage")}/checkbox`);
  });

  it("Check a checkbox", () => {
    cy.get("#tree-node-home").click({ force: true }).should("be.checked");
    cy.get("#result").should(
      "have.text",
      "You have selected :homedesktopnotescommandsdocumentsworkspacereactangularveuofficepublicprivateclassifiedgeneraldownloadswordFileexcelFile",
    );
  });
});
