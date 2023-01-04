describe("css-selector",()=>{
    beforeEach(()=>{
        cy.visit("/dynamicid")
    })

    it('cy.find example', () => {
        cy.get('div').find('button').should(
            "have.text",
            "Button with Dynamic ID"
        )
    })
})