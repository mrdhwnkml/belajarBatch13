describe('Login Page', () => {
    it('should display the login form', () => {
        cy.visit('/login');
        cy.get('form#loginForm').should('be.visible');
        cy.get('input[name="username"]').should('be.visible');
        cy.get('input[name="password"]').should('be.visible');
        cy.get('button[type="submit"]').should('be.visible');
    });

    it('Checkout logic while buying in website', () => {
        cy.visit('/login');
        cy.get('form#loginForm').should('be.visible');
        cy.get('input[name="username"]').should('be.visible');
        cy.get('input[name="password"]').should('be.visible');
        cy.get('button[type="submit"]').should('be.visible');
    });

})