describe("Navegaciones", () => {
  it("Visita todas las paginas usando el menu del navbar", () => {
    cy.visit("http://localhost:8080/");
    cy.get("a").contains("Personajes").click();
    cy.get("a").contains("About").click();
    cy.get("a").contains("DB App").click();
  });

  it("Debe entrar a la pagina del personaje Black Goku y regresar al listado de personajes", () => {
    cy.visit("http://localhost:8080/personajes");
    cy.visit("http://localhost:8080/personajes/Black%20Goku");
    cy.get("a").contains("Regresar").click();
  });
});
