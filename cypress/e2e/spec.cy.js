describe("Is LaLiga available", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");
    cy.contains("La Liga").click();
  });
});
