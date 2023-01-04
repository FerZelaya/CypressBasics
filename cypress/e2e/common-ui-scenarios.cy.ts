/*
  To run a test, delete the '.skip' method from each describe
*/

// Simple click to a button and asserting it should have a certain class and a certain background color after action
describe.skip("Click test", () => {
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

//Dynamic table test to always get the Chrome percentage
describe("Dynamic table test to always get Chrome CPU percentage", () => {
  beforeEach(() => {
    cy.visit("/dynamictable");
  });

  it("Get Chrome CPU test", () => {
    cy.get(`div[role="row"] span`).each(($cell) => {
      if ($cell.text().includes("Chrome")) {
        cy.log(`${$cell.text()} row`);
        let chomeValues: string[] = [];
        chomeValues.push($cell.next().text());
        chomeValues.push($cell.next().next().text());
        chomeValues.push($cell.next().next().next().text());
        chomeValues.push($cell.next().next().next().next().text());

        chomeValues.forEach((chromeValue) => {
          if (chromeValue.includes("%")) {
            cy.get(".bg-warning").should(
              "have.text",
              `Chrome CPU: ${chromeValue}`
            );
          }
        });
      }
    });
  });
});
