
describe('Dashboard', () => {
    beforeEach(() => {
      cy.visit('/dashboard', {
        timeout: 20000,
      })
      cy.get("#email").type("fpujols@webfx.com");
      cy.get("#password").type("PA1SEO20Conv20?!");
      cy.get('form').submit();
    });
    
    //  it("Should create and archive a Project", () => {
    //     cy.contains('create new project').click();
    //     cy.get('.modal-content #name').type('Cypress - Test project');
    //     cy.get('#publicStatus').click();
    //     cy.get('.SelectInput-module_input_3D-40').click().type('R&D Test Company').type('{enter}')
    //     cy.contains('CREATE PROJECT').click();
    //     cy.percySnapshot("TWFX - project overview");
    //     cy.get('.settings').click();
    //     cy.get('#archived').click();
    //     cy.contains('Save changes').click();
    //     cy.contains('archived');
    //     cy.percySnapshot("TWFX - project settings");
    // });

    // it("Should delete an archived Project", () => {
    //     cy.contains('Your Archived Projects').click();
    //     cy.contains('Cypress - Test project').click();
    //     cy.get('.settings').click();
    //     cy.contains('Delete Project').click();
    //     cy.get('.confirm_btn').click();
    //     cy.contains('The Cypress - Test project project has been deleted. You can recover this project by going to the recently deleted projects page.')
    // });

    // it("Should create a project from template", () => {
    //    cy.get('#Templates').click();
    //    cy.contains('1 - Automation - Project Template').click();
    //    cy.contains('Deploy a Project').click();
    //    cy.contains('CREATE PROJECT').click();
    // }); 

  //   it("Should create a todoList template", () => {
  //     cy.get('#Templates').click();
  //     cy.contains('1 - Automation - Project Template').click();
  //     cy.contains('create to-do list').click();
  //     cy.get('#title').type('Automation - TodoList #1')
  //     cy.get('#description').type('Automation - TodoList description')
  //     cy.contains('CREATE LIST').click();
  //     cy.percySnapshot("TWFX - template project todoList");
  //  }); 

  it("Should create a todo in a project template", () => {
      cy.get('#Templates').click();
      cy.contains('1 - Automation - Project Template').click();
      cy.contains('Add an item').click();
      cy.get('#content').type('Automation - Todo');
      cy.contains('Add this item').click();
      cy.percySnapshot("TWFX - template project todos");

  }); 


});