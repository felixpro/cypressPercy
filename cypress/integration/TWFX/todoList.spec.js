
describe('adding and deleting a todo list', () => {
  beforeEach(() => {
    cy.visit('/projects/14993480/todo-lists', {
      timeout: 20000,
    })
    cy.get("#email").type("fpujols@webfx.com");
    cy.get("#password").type("PA1SEO20Conv20?!");
    cy.get('form').submit()
  })

  it("Should create a ToDo-list", () => {
    cy.get('.new-todoList-btn').click();
    cy.get('#name').type("Admin - new ToDo-list")
    cy.get('#description').type("Create ToDo-list - description")
    cy.contains('CREATE THIS LIST').click();
    cy.contains('div', 'Admin - new ToDo-list')
    cy.contains('Admin - new ToDo-list').click()
    cy.percySnapshot("TWFX - Create ToDo-list");
  })

  it("Should create a Todo", () => {
    cy.contains('Admin - new ToDo').click()
    cy.get('.new-todoBtn').click();
    cy.get('#content').type("Todo#1");
    cy.get('.saveTodo-btn').click();
    cy.get('.done-btn').click();
    cy.contains('Todo#1');
    cy.percySnapshot("TWFX - Create ToDo");
  })

  it("Should edit a Todo", () => {
    cy.get('.todo-overlay .edit-todoBtn').click({ force: true });
    cy.get('#content').click().type(' - edited');
    cy.get('.saveTodo-btn').click();
    cy.percySnapshot("TWFX - Todo edited");
  })

  it("Should Add a due date and priority", () => {
    cy.get('.todo-container .todoPriority-btn').click();
    cy.get('.todo-container .DateInput').click();
    cy.get(':nth-child(2) > .CalendarMonth > .CalendarMonth_caption > .DayPickerNavigation_selects > :nth-child(1) > .DayPickerNavigation_select').select('10');
    cy.get(':nth-child(2) > .CalendarMonth > .CalendarMonth_caption > .DayPickerNavigation_selects > :nth-child(2) > .DayPickerNavigation_select').select('2000');
    cy.get('[aria-label="Wednesday, November 8, 2000"]').click();
    cy.percySnapshot("TWFX - Adding due date and priority to ToDos");
  })

  it("Should Add a responsable", () => {
    cy.percySnapshot("TWFX - Add responsable");
    cy.get('.assignee-btn').click();
    cy.get('.css-2n3929-singleValue > .SingleValue-module_container_1Fl9F').click();
    cy.get('#react-select-4-input').clear();
    cy.get('#react-select-4-input').type('felix test');
    cy.get('.Option-module_label_1i6B3').click();
  })

  it("Should edit a Todo", () => {
    cy.get('.todo-overlay .edit-todoBtn').click({ force: true });
    cy.get('#content').click().type(' - edited');
    cy.get('.saveTodo-btn').click();
    cy.percySnapshot("TWFX - Todo edited");
  })


  it("Should comment a Todo, add a subscriber and tag Felix Pujols", () => {
    cy.get('.commentTodo-btn').click();
    cy.percySnapshot("TWFX - todo comment section");
    cy.get('.ql-editor').type('Comment toDo from automation test, @Felix P')
    cy.contains('Felix Pujols').click();
    cy.contains('Post a comment').click();
  })

  it("Should edit a Todo comment", () => {
    cy.get('.commentTodo-btn').click();
    cy.contains('Edit').click();
    cy.percySnapshot("TWFX - todo comment section");
    cy.get('.editForm-textarea').type(' - edited')
    cy.get('.editForm-save').click();
  })


 it("Should Delete a Todo", () => {
    cy.get('.todo-container .delete-todoBtn').click({ force: true });
    cy.contains('button', 'Yes').click();
    cy.contains('div', 'Todo#1 - edited').should('not.exist');
 })

 it("Should edit a ToDo-list", () => {
  cy.get('.edit-todoBtn').click({ force: true });
  cy.get('#name').type(" - Edited")
  cy.get('#description').type(" - Edited")
  cy.contains('SAVE CHANGES').click();
  cy.contains('div', 'Admin - new ToDo-list - Edited')
  cy.percySnapshot("TWFX - Create ToDo-list");
})


 it("Should Delete ToDoList", () => {
   cy.percySnapshot("TWFX - Delete ToDoList");
   cy.get(' .delete-todoBtn').click({ force: true });
   cy.contains('button', 'Yes').click();
 })
     
})
