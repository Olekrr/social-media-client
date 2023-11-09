describe("Login Test", () => {
  it("Attempts to log in when provided valid credentials", () => {
    cy.visit("/");
    cy.wait(500);
    cy.get("#registerForm").within(() => {
      cy.get('button[data-bs-target="#loginModal"]').click();
    });
    cy.wait(500);
    cy.get("input#loginEmail").type("testnamexyrzpo4nk43@stud.noroff.no");
    cy.get("input#loginPassword").type("1234qwer");

    cy.intercept("POST", "/api/login").as("loginRequest");

    cy.get("#loginForm").within(() => {
      cy.root().submit();
    });
  });
});
