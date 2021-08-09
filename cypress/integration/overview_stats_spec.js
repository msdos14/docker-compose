/// <reference types="Cypress" />
const {username, password} = require('../fixtures/credentials.json')

describe('Overview Stats', () => {
  beforeEach(() => {
    cy.viewport(2000, 1200)
    cy.visit('https://fanisana.bpo-inc.com', { timeout: 20000 })
    cy.url().should('include', '/Account/LogOn')
    cy.get('#UserName').click().type(username)
    cy.get('#Password').click().type(password)
    cy.get('.btn').click()
  })

  it('can download overview', () => {
    cy.get('.download-report-as > :nth-child(1)').click()
  })
})