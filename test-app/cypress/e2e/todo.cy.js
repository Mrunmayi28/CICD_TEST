// cypress/e2e/todo.cy.js

describe('Todo List', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should add a new task', () => {
    cy.get('input[placeholder="Add a new task"]').type('Learn Cypress');
    cy.contains('Add Task').click();
    cy.contains('Learn Cypress').should('exist');
  });

  it('should delete a task', () => {
    cy.get('input[placeholder="Add a new task"]').type('Learn Cypress');
    cy.contains('Add Task').click();
    cy.contains('Learn Cypress').should('exist');

    cy.contains('Learn Cypress')
      .parent()
      .contains('Delete')
      .click();
      
    cy.contains('Learn Cypress').should('not.exist');
  });
});
