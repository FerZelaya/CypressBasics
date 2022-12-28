describe('empty spec', () => {
  
  beforeEach(()=>{
    cy.visit("/textinput")
  })

  it('Input challenge', () => {
    cy.get("input#newButtonName").type("Hello from Cypress test")
    cy.get("button#updatingButton").click().should("have.text","Hello from Cypress test");

    cy.get("input#newButtonName").clear()

    cy.get("input#newButtonName").type("Hello changed")
    cy.get("button#updatingButton").should("have.text","Hello from Cypress test");
    
    cy.get("button#updatingButton").click().should("have.text","Hello changed");
  })
})