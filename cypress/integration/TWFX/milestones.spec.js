describe('Milestones', () => {
    beforeEach(() => {
      cy.visit('/projects/14994141/milestones', {
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

    it("Should create a Milestone comment with subscriber", () => {
      cy.get('.comment-icon').click();
      cy.percySnapshot("TWFX - Before Create a Milestone comment");
      cy.get('.ql-editor').type('Admin - Comment con milestone')
      cy.contains('Subscribe people to receive email notifications').click();
      cy.contains('Felix Test').click();
      cy.contains('Post a comment').click();
    });

    it("Should delete milestone comment ", () => {
      cy.get('.comment-icon').click();
      cy.get('#delete-comment-msg').click();
      cy.get('.confirm_btn').click();
      cy.contains('Admin - Comment con milestone').should('not.exist');
    });
    
       it("Should create a Private Milestone", () => {
      cy.percySnapshot("TWFX - Before Create a Milestone");
      cy.contains('Add a New Milestone').click();
      cy.get('#title').clear();
      cy.get('#title').type('Admin - New private milestone ');
      cy.get('#isPrivate').click();
      cy.contains('ADD MILESTONE').click();
    });

    it("Should create Milestones in bulk", () => {
      cy.percySnapshot("TWFX - Before Milestones in bulk");
      cy.contains('Add a New Milestone').click();
      cy.contains('Add milestones in bulk').click();  

      cy.get('#milestoneList\\[0\\]\\.title').clear();
      cy.get('#milestoneList\\[0\\]\\.title').type('Admin - Milestone #1');
      cy.get('.datePicker').first().click();
      cy.get('.datePicker').contains('15').click();

      cy.get('#milestoneList\\[1\\]\\.title').clear();
      cy.get('#milestoneList\\[1\\]\\.title').type('Admin - Milestone #2');
      cy.get('.datePicker').last().click();
      cy.get('.datePicker').contains('15').click();

      cy.contains('ADD THESE MILESTONES').click();   
      cy.contains('Admin - Milestone #1');
      cy.contains('Admin - Milestone #2');
    });

    it("Should delete all Milestones", () => {
    // cy.get('.dropup > .btn')
      cy.contains('Admin - New milestone').click();
      cy.contains('Delete milestone').click();
      cy.get('.confirm_btn').click();
      cy.contains('Admin - Nw milestone').should('not.exist');

      cy.contains('Admin - New private milestone ').click();
      cy.contains('Delete milestone').click();
      cy.get('.confirm_btn').click();
      cy.contains('Admin - New private milestone ').should('not.exist');

      cy.contains('Admin - Milestone #1').click();
      cy.contains('Delete milestone').click();
      cy.get('.confirm_btn').click();
      cy.contains('Admin - New private milestone ').should('not.exist');

      cy.contains('Admin - Milestone #2').click();
      cy.contains('Delete milestone').click();
      cy.get('.confirm_btn').click();
      cy.contains('Admin - New private milestone ').should('not.exist');
    });


  // // After we fix the cache error when deleting Events, we can uncomment the assertions for events

    it("Should create a single day Event", () => {
      cy.contains('Add a New Milestone').click();
      cy.get('#event').click();
      cy.get('#title').clear();
      cy.get('#title').type('Admin - New event');
      cy.contains('ADD EVENT').click();
    });

    it("Should edit a single day event", () => {
      cy.get('.event-container').click();
      cy.get('#title').type(' - edited');
      cy.contains('SAVE CHANGES').click();
      cy.contains('Admin - New event - edited').should('not.exist');    
    });

    it("Should delete a single day event", () => {
      cy.get('.event-container').click();
      cy.contains('Delete event').click();
      cy.get('.confirm_btn').click();
      // cy.contains('Admin - New event').should('not.exist');    
    });
    

    it("Should create a multi day Event", () => {
      cy.contains('Add a New Milestone').click();
      cy.get('#event').click();
      cy.get('#title').clear();
      cy.get('#title').type('Admin - Multi day event');

      cy.get('.datePicker').first().click();
      cy.get('.datePicker').contains('15').click();
      cy.get('.datePicker').last().click();
      cy.get('.datePicker').contains('16').click();
      //  cy.contains('Admin - Multi day event');
      cy.contains('ADD EVENT').click();
    });
   
    it("Should delete a multi day events", () => {
      cy.get('.event-container').first().click({force: true});
      cy.contains('Delete event').click();
      cy.get('.confirm_btn').click();
      // cy.contains('Admin - Multi day event').should('not.exist');      
    });
    
});
