describe("Is LaLiga available", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");
    cy.contains("La Liga").click();
  });
});

// describe("Find new competiton", () => {
//   it("passes", () => {
//     cy.visit("http://localhost:3000");
//     cy.contains("Competities").click();
//     cy.contains("Eredivisie").click();
//     cy.get("#grid-container").contains("Vitesse").click();
//   });
// });
