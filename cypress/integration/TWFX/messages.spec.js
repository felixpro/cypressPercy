
describe('Messages', () => {
    beforeEach(() => {
      cy.visit('/projects/14994141/posts', {
        timeout: 20000,
      })
      cy.get("#email").type("fpujols@webfx.com");
      cy.get("#password").type("PA1SEO20Conv20?!");
      cy.get('form').submit();
    });
  
     it("Should create a Message", () => {
        cy.percySnapshot("TWFX - Before Create Message");
        cy.get('.create_msg_btn').click();
        cy.get('#title').type("Admin Message #1");
        cy.get('.ql-editor').type("Description message");
        cy.get('.submit_msg_btn').click();
        cy.contains('Post message anyway').click();
        cy.contains('div', 'Admin Message #1');
        cy.percySnapshot("TWFX - After Create Message");
    });

  //   it("Should edit Message and set it to private", () => {
  //       cy.percySnapshot("TWFX - Before Edit Message");
  //       cy.contains('Admin Message #1').click();
  //       cy.contains('a', 'Edit this message').click();
  //       cy.get('#title').type(' - Edited');
  //       cy.get('.ql-editor').type(' - Edited');
  //       cy.get('#private').check();
  //       cy.contains('button', 'Save changes').click();
  //       cy.percySnapshot("TWFX - After Edit Message");
  //       cy.contains('div', 'Admin Message #1 - Edited');
  //       cy.contains('span','only people from your company can see this ');
  //   });

  // it("Should add a category and milestone to message", () => {
  //       cy.contains('Admin Message #1').click();
  //       cy.contains('a', 'Edit this message').click();
  //       cy.get('#category-input').click();
  //       cy.contains('Calls').click();
  //       cy.get('#milestone-msg').click();
  //       cy.contains('Cypress Automation - No modify').click();
  //       cy.contains('button', 'Save changes').click();
  //       cy.contains('Admin Message #1').click();
  //       cy.contains('a', 'Edit this message').click();
  //       cy.contains('Calls');
  //       cy.contains('Cypress Automation - No modify');
  //       cy.percySnapshot("TWFX - After adding category and milestone to Message");
  //   });


  //   it("Should comment a message", () => {
  //       cy.contains('div', 'Admin Message #1 - Edited').click();
  //       cy.get('.ql-editor').type('Admin comment - Cy Test');
  //       cy.contains('span','Post a comment').click();
  //       cy.contains('Admin comment - Cy Test');
  //       cy.percySnapshot("TWFX - After comment Message");
  //   });

  //   it("Should delete a comment", () => {
  //       cy.contains('div', 'Admin Message #1 - Edited').click();
  //       cy.get('#delete-comment-msg').click();
  //       cy.get('.confirm_btn').click();
  //       cy.contains('div', 'Admin comment - Cy Test').should('not.exist');
  //       cy.percySnapshot("TWFX - After Deleting a comment");
  //     });

  //   it("Should create a Message with template and subscriber", () => {
  //       cy.percySnapshot("TWFX - Before Create Message with template");
  //       cy.wait(5000);
  //       cy.contains('post a new message').click();
  //       cy.get('#title').type("Admin Message from template #2");
  //       cy.get('#template-msg').click()
  //       cy.contains('Onboarding Call Follow Up').click();
  //       cy.wait(5000);
  //       cy.contains('div', 'Subscribe people to receive email notifications').click()
  //       cy.contains('Felix/Client#3 Pujols').click();
  //       cy.percySnapshot("TWFX - Message input with template and subscriber");
  //       cy.get('.submit_msg_btn').click();
  //       cy.contains('Admin Message from template #2').click();
  //       cy.contains('div', 'Admin Message from template #2');
  //       cy.percySnapshot("TWFX - After Create Message with template");
  //   });

  //  it("Should delete messages", () => {
  //      cy.contains('div', 'Admin Message #1 - Edited').click();
  //      cy.get('#delete-msg').click();
  //      cy.get('.confirm_btn').click();
  //      cy.contains('div', 'Admin Message #1 - Edited').should('not.exist');
  //      // Delete second message
  //      cy.contains('div', 'Admin Message from template #2').click();
  //      cy.get('#delete-msg').click();
  //      cy.get('.confirm_btn').click();
  //      cy.contains('div', 'Admin Message from template #2').should('not.exist');
  //      cy.percySnapshot("TWFX - After Deleting messages");
  //  });
    
  });
  
  
 