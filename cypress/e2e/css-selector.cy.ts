describe("css-selector",()=>{
    beforeEach(()=>{
        cy.visit("/dynamicid")
    })

    it('Cy.get + cy.find ', () => {
        cy.get('div').find('button').should(
            "have.text",
            "Button with Dynamic ID"
        )
    })
})