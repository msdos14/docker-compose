/// <reference types="Cypress" />
const {username, password} = require('../fixtures/credentials.json')

describe('Quantity Stats', () => {
  beforeEach(() => {
    cy.viewport(2000, 1200)
    cy.visit('https://fanisana.bpo-inc.com', { timeout: 20000 })
    cy.url().should('include', '/Account/LogOn')
    cy.get('#UserName').click().type(username)
    cy.get('#Password').click().type(password)
    cy.get('.btn').click()
  })

  it('can download quantity stats', () => {
    cy.get('#navbar > :nth-child(2) > :nth-child(1) > .dropdown-toggle').click()
    cy.get('.open > .dropdown-menu > :nth-child(7) > a').click()
    cy.get('a').contains('XLSX').click()
  })
})