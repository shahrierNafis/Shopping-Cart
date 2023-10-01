/* eslint-disable no-undef */
describe('template spec', () => {
  it('has navigation links', () => {
    cy.visit('/')
    cy.get('nav a').should('have.length', 3)
  })
it('', () => {
  
})
})
