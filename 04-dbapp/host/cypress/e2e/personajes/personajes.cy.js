describe("Personajes", () => {
  it("Obtener todos los personajes", () => {
    cy.visit("http://localhost:8080/personajes");

    cy.get("div.aspect-w-1")
      .find("img")
      .should((img) => {
        expect(img.length).to.equal(129);
      });

    // let count = 0;

    // cy.get("img")
    //   .each((item) => (count += 1))
    //   .then(() => {
    //     expect(count).to.equal(129);
    //   });
  });
});
