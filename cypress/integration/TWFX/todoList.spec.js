
describe('adding and deleting a todo list', () => {
  beforeEach(() => {
    cy.visit('https://app.webfx.com/projects/14993480/todo-lists', {
      timeout: 20000,
    })
    cy.get("#email").type("fpujols@webfx.com");
    cy.get("#password").type("PA1SEO20Conv20?!");
    cy.get('form').submit()
  })


  it("Create ToDo-list", () => {
    cy.get('.col-lg-3 > .Button-module_btn_3vLCr').click();
    cy.get('#name').type("Create ToDo-list - Name")
    cy.get('#description').type("Create ToDo-list - description")
    cy.get('.Modal-module_footerFinishCell_AmcJf > .Button-module_primary_1NBBI').click();
    cy.contains('div', 'Create ToDo-list - Name')
    cy.contains('Create ToDo-list - Name').click()
  })

  it("Create Todo", () => {
    cy.contains('Create ToDo-list - Name').click()
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.Button-module_text_1TOez').click();
    cy.get('#content').click();
    cy.get('.Button-module_primary_1NBBI > .Button-module_contentWrap_j6nhS > .Button-module_text_1TOez').click();
    cy.get('.Button-module_borderless_3DxjV > .Button-module_contentWrap_j6nhS > .Button-module_text_1TOez').click();
    /* ==== End Cypress Studio ==== */
  })
     

 /* it('Delete ToDo-list', function() {
    cy.contains('h3', 'Create ToDo-list - Name').click()
    cy.get('.Button-module_danger-outline_2G3tf > .Button-module_contentWrap_j6nhS > .Button-module_icon_3Rux2').click({ force: true })
    cy.get('.Button-module_danger_1Ygh8').click();
  }); */
})
