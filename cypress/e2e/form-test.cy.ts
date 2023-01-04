//This tests a complete form and sumbit
describe("Example form test", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoPage")}/automation-practice-form`);
  });

  //Fills the form and submits it
  it("Modal/Dialog test", () => {
    //Personal information
    cy.get("#firstName").type("Fernando");
    cy.get("#lastName").type("Zelaya");
    cy.get("#userEmail").type("fernando.zelaya@avioconsulting.com");
    cy.get("#gender-radio-1").click({ force: true });
    cy.get("#userNumber").type("123123132");

    //Date picker
    cy.get("#dateOfBirthInput").click();
    cy.get("select.react-datepicker__month-select").select("3");
    cy.get("select.react-datepicker__year-select").select("1998");
    cy.get(".react-datepicker__day--006").eq(0).click();
    cy.get("#dateOfBirthInput").should("have.value", "06 Apr 1998");

    //Subject picket
    cy.get(".subjects-auto-complete__control").click().type("c");
    cy.get(".subjects-auto-complete__option")
      .contains("Computer Science")
      .click();

    cy.get("#hobbies-checkbox-1").click({ force: true }).should("be.checked");
    cy.get("#currentAddress").type("La Ceiba, Honduras");

    //State and city
    cy.get(".css-yk16xz-control").eq(1).click({ force: true });
    cy.get("#react-select-3-option-0").click({ force: true });
    cy.get(".css-yk16xz-control").eq(1).click({ force: true });
    cy.get("#react-select-4-option-0").click({ force: true });

    //Submit
    cy.get(`button[id="submit"]`).click({ force: true });

    cy.get(`div[role="dialog"]`).should("exist").should("be.visible");

    // cy.get(".modal-content").find("#closeLargeModal").click({ force: true });
    // cy.get(`div[role="dialog"]`).should("not.exist");
  });
});
