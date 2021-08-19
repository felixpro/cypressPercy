
describe('adding and deleting a todo list', () => {
    beforeEach(() => {
      cy.visit('https://app.webfx.com/projects/14993480/posts', {
        timeout: 20000,
      })
      cy.get("#email").type("fpujols@webfx.com");
      cy.get("#password").type("PA1SEO20Conv20?!");
      cy.get('form').submit()
    })
  
  
     it("Create Message", () => {
        cy.contains('span', 'post a new message').click();
        cy.get('#title').type("Admin Message #1");
        cy.get('.ql-editor').type("Description message");
        cy.get('.Button-module_primary_zic6V').click();
        cy.get('.Button-module_danger_eM7K_').click();
        cy.contains('div', 'Admin Message #1');
    }) 

    it("Edit Message - set to private", () => {
        cy.contains('Admin Message #1').click();
        cy.contains('a', 'Edit this message').click();
        cy.get('#title').type(' - Edited');
        cy.get('.ql-editor').type(' - Edited');
        cy.get('#private').check();
        cy.contains('button', 'Save changes').click();
        cy.contains('div', 'Admin Message #1 - Edited');
        cy.contains('span','only people from your company can see this ');
    }) 

    it("Comment message", () => {
        cy.contains('div', 'Admin Message #1 - Edited').click();
        cy.get('.ql-editor').type('Admin comment - Cy Test');
        cy.contains('span','Post a comment').click();
    });

   it("Delete message", () => {
       cy.contains('div', 'Admin Message #1 - Edited').click();
       cy.get('.MessageToolbar-module_items_16IKg > :nth-child(3) > div').click();
       cy.get('.Button-module_danger_eM7K_ > .Button-module_contentWrap_1lSJB > .Button-module_text_2AXJY').click();
       cy.contains('div', 'Admin Message #1 - Edited').should('not.exist');
   }) 


    
  }) 
  
  
 