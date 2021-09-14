describe('Milestones', () => {
    beforeEach(() => {
      cy.visit('/projects/14993480/milestones', {
        timeout: 20000,
      })
      cy.get("#email").type("fpujols@webfx.com");
      cy.get("#password").type("PA1SEO20Conv20?!");
      cy.get('form').submit();
    });

    it("Should create a Milestone", () => {
      cy.percySnapshot("TWFX - Before Create a Milestone");
      cy.contains('Add a New Milestone').click();
      cy.get('#title').clear();
      cy.get('#title').type('Admin - New milestone');
      cy.contains('ADD MILESTONE').click();
    });

       it("Should create a Private Milestone", () => {
      cy.percySnapshot("TWFX - Before Create a Milestone");
      cy.contains('Add a New Milestone').click();
      cy.get('#title').clear();
      cy.get('#title').type('Admin - New private milestone ');
      cy.get('#isPrivate').click();
      cy.contains('ADD MILESTONE').click();
    });

    it("Should delete a Milestone", () => {
    //   cy.get('.dropup > .btn')
      cy.contains('Admin - New milestone').click();
      cy.contains('Delete milestone').click();
      cy.get('.confirm_btn').click();
      cy.contains('Admin - New milestone').should('not.exist');
      cy.contains('Admin - New private milestone ').click();
      cy.contains('Delete milestone').click();
      cy.get('.confirm_btn').click();
      cy.contains('Admin - New private milestone ').should('not.exist');
    });
    
    

});
  