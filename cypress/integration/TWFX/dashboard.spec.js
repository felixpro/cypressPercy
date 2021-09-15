
describe('Dashboard', () => {
    beforeEach(() => {
      cy.visit('/dashboard', {
        timeout: 20000,
      })
      cy.get("#email").type("fpujols@webfx.com");
      cy.get("#password").type("PA1SEO20Conv20?!");
      cy.get('form').submit();
    });
    
     it("Should create and archive a Project", () => {
        cy.contains('create new project').click();
        cy.get('.modal-content #name').type('Cypress - Test project');
        cy.contains('CREATE PROJECT').click();
        cy.percySnapshot("TWFX - project overview");
        cy.get('.settings').click();
        cy.get('#archived').click();
        cy.contains('Save changes').click();
        cy.contains('archived');
        cy.percySnapshot("TWFX - project settings");
    });

    it("Should delete an archived Project", () => {
        cy.contains('Your Archived Projects').click();
        cy.contains('Cypress - Test project').click();
        cy.get('.settings').click();
        cy.contains('Delete Project').click();
        cy.get('.confirm_btn').click();
        cy.contains('The Cypress - Test project project has been deleted. You can recover this project by going to the recently deleted projects page.')
    });

});