describe("Login Test", () => {
  it("Prevents login with invalid credentials", () => {
    cy.visit("/");
    cy.wait(500);
    cy.get("#registerForm").within(() => {
      cy.get('button[data-bs-target="#loginModal"]').click();
    });
    cy.wait(500);
    cy.get("input#loginEmail").type("invalid@invalid.no");
    cy.get("input#loginPassword").type("invalid");

    cy.intercept("POST", "/api/v1/social/auth/login").as("loginRequest");

    cy.get("#loginForm").within(() => {
      cy.root().submit();
    });

    cy.get("input#loginEmail:invalid").should("exist");

    cy.wait("@loginRequest").then((interception) => {
      expect(interception.response.statusCode).to.eq(401);
    });
  });
});
