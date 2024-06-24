
// cypress/integration/counter_spec.js

describe('Counter Component', () => {
  it('increments and decrements the counter', () => {
    // Visit the React app
    cy.visit('http://localhost:3000')

    // Check if the counter starts at 0
    cy.contains('h1', 'Counter: 0')

    // Click the increment button and check if the counter increments
    cy.contains('button', 'Increment').click()
    cy.contains('h1', 'Counter: 1')

    // Click the decrement button and check if the counter decrements
    cy.contains('button', 'Decrement').click()
    cy.contains('h1', 'Counter: 0')
  })
})
