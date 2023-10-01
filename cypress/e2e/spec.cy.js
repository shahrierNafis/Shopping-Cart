/* eslint-disable no-undef */
describe('Home', () => {
  it('has navigation links', () => {
    cy.visit('/')
  })
})
describe('Sore', () => {
it('changes category on click', () => {
   cy.visit('/store')
})
})
