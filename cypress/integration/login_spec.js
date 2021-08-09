/// <reference types="Cypress" />
const {username, password} = require('../fixtures/credentials.json')

describe('Login', () => {
  beforeEach(() => {
    cy.viewport(2000, 1200)
    cy.visit('https://fanisana.bpo-inc.com', { timeout: 20000 })
    cy.url().should('include', '/Account/LogOn')
    cy.get('#UserName').click().type(username)
    cy.get('#Password').click().type(password)
    cy.get('.btn').click()
  })

  it('can login', () => {
    cy.url().should('include', '/Reports/SurveysAndStatuses')
  })
})