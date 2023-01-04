//Declare image HTML element to use in your tests
let imageElement: HTMLImageElement;

//Valid and broken image test
describe("Image test", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.visit(`${Cypress.env("demoPage")}/broken`);
  });

  //Test will pass since the width of the image is greater tha 0, meaning is not broken
  it("Check a valid Image", () => {
    cy.get('div > img[src="/images/Toolsqa.jpg"]')
      .should("be.visible")
      .and(($img) => {
        imageElement = $img[0] as unknown as HTMLImageElement;
        expect(imageElement.naturalWidth).to.be.greaterThan(0);
      });
  });

  //Test will fail since image has a width of 0. meaning is broken
  it("Check broken image", () => {
    cy.get('div > img[src="/images/Toolsqa_1.jpg"]')
      .should("be.visible")
      .and(($img) => {
        imageElement = $img[0] as HTMLImageElement;
        expect(imageElement.naturalWidth).to.be.greaterThan(0);
      });
  });
});
