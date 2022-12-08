describe("Test test", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
    cy.contains("type").click();
  });
});
