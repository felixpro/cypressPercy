
describe('adding and deleting a todo list', () => {
  beforeEach(() => {
    cy.visit('/projects/14993480/todo-lists', {
      timeout: 20000,
    })
    cy.get("#email").type("fpujols@webfx.com");
    cy.get("#password").type("PA1SEO20Conv20?!");
    cy.get('form').submit()
  })

  it("Create ToDo-list", () => {
    cy.get('.new-todoList-btn').click();
    cy.get('#name').type("Admin - new ToDo-list")
    cy.get('#description').type("Create ToDo-list - description")
    cy.contains('CREATE THIS LIST').click();
    cy.contains('div', 'Admin - new ToDo-list')
    cy.contains('Admin - new ToDo-list').click()
    cy.percySnapshot("TWFX - Create ToDo-list");
  })

  it("Create Todo", () => {
    cy.contains('Admin - new ToDo').click()
    cy.get('.new-todoBtn').click();
    cy.get('#content').type("Todo#1");
    cy.get('.saveTodo-btn').click();
    cy.get('.done-btn').click();
    cy.get('.Todo-module_content_2BGcA > div').should('have.text', 'Todo#1');
  })

//   it("Edit Todo", () => {
//     cy.get('div.TableCell-module_column_3v9bX.TableCell-module_grow_2Tbm7.d-flex.align-items-center.text-left > div.OverlayActions-module_extraSpace_1wbM0.Todo-module_overlay_1g_el > div.OverlayActions-module_overlay_3s__y > button.Button-module_btn_3vLCr.Button-module_primary-outline_2PuTS.Button-module_borderless_3DxjV.Button-module_btnSm_1zK9l.OverlayActions-module_overlayButton_3wkLg').click({ force: true });
//     cy.get('#content').click().type('- edited');
//     cy.get('.TodoForm-module_footer_3z3QX > .Button-module_primary_1NBBI').click();
//     cy.percySnapshot("TWFX - Todo edited");
//   })

//   it("Add due date and priority", () => {
//     cy.get('.Todo-module_dateIcon_2qDeU').click();
//     cy.get(':nth-child(2) > .CalendarMonth > .CalendarMonth_caption > .DayPickerNavigation_selects > :nth-child(1) > .DayPickerNavigation_select').select('0');
//     cy.get(':nth-child(2) > .CalendarMonth > .CalendarMonth_caption > .DayPickerNavigation_selects > :nth-child(2) > .DayPickerNavigation_select').select('2020');
//     cy.get('[aria-label="Thursday, January 2, 2020"]').click();
//     cy.get(':nth-child(3) > .TodoPriority-module_priorityController_xq7eD').click();
//     cy.get(':nth-child(3) > .TodoPriority-module_priorityController_xq7eD').click();
//     cy.get(':nth-child(3) > .TodoPriority-module_priorityController_xq7eD').click();
//     cy.percySnapshot("TWFX - Adding due date and priority to ToDos");
//   })

//   it("Add responsable", () => {
//     cy.percySnapshot("TWFX - Add responsable");
//     cy.get('.TodoAssigneeView-module_icon_iLH_a').click();
//     cy.get('.css-2n3929-singleValue > .SingleValue-module_container_1Fl9F').click();
//     cy.get('#react-select-4-input').clear();
//     cy.get('#react-select-4-input').type('felix test');
//     cy.get('.Option-module_label_1i6B3').click();
//   })


//  it("Delete Todo", () => {
//     cy.get('div.TableCell-module_column_3v9bX.TableCell-module_grow_2Tbm7.d-flex.align-items-center.text-left > div.OverlayActions-module_extraSpace_1wbM0.Todo-module_overlay_1g_el > div.OverlayActions-module_overlay_3s__y > button.Button-module_btn_3vLCr.Button-module_danger-outline_2G3tf.Button-module_borderless_3DxjV.Button-module_btnSm_1zK9l.OverlayActions-module_overlayButton_3wkLg').click({ force: true });
//     cy.get('.Button-module_danger_1Ygh8').click();
//  })

//  it("Delete ToDoList", () => {
//    cy.percySnapshot("TWFX - Delete ToDoList");
//    cy.get('.Button-module_danger-outline_2G3tf > .Button-module_contentWrap_j6nhS > .Button-module_icon_3Rux2').click({ force: true });
//    cy.get('.Button-module_danger_1Ygh8 > .Button-module_contentWrap_j6nhS > .Button-module_text_1TOez').click();
//  })
     
})
