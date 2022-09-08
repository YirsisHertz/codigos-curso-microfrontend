describe("Counter Tests", () => {
  it("debe cargar el counter", () => {
    cy.visit("http://localhost:8080");
    cy.get("h1").contains("Counter MF");
    cy.get("button").contains("+1");
    cy.get("button").contains("-1");
    cy.get("span").contains("10");
  });

  it("Debe aumentar el counter en 1 despues de un click", () => {
    cy.visit("http://localhost:8080");

    const btnAdd = cy
      .get(".bg-green-300.text-center.font-bold.rounded-md.p-2")
      .contains("+1");

    btnAdd.click();
    btnAdd.click();
    btnAdd.click();
    btnAdd.click();
    btnAdd.click();

    cy.get("span").contains("15");
  });

  it("Debe disminuir el counter hasta 3", () => {
    cy.visit("http://localhost:8080/");

    cy.get(".bg-red-400").click();
    cy.get(".bg-red-400").click();
    cy.get(".bg-red-400").click();
    cy.get(".bg-red-400").click();
    cy.get(".bg-red-400").click();
    cy.get(".bg-red-400").click();
    cy.get(".bg-red-400").click();

    cy.get("span").contains("3");
  });
});
