/// <reference types="Cypress" />
const {username, password} = require('../fixtures/credentials.json')

describe('Speed Stats', () => {
  beforeEach(() => {
    cy.viewport(2000, 1200)
    cy.visit('https://fanisana.bpo-inc.com', { timeout: 20000 })
    cy.url().should('include', '/Account/LogOn')
    cy.get('#UserName').click().type(username)
    cy.get('#Password').click().type(password)
    cy.get('.btn').click()
  })

  it('can download speed stats', () => {
    cy.get('#navbar > :nth-child(2) > :nth-child(1) > .dropdown-toggle').click()
    cy.get('.open > .dropdown-menu > :nth-child(8) > a').click()
    cy.get('[href="/primary/api/ReportDataApi/SpeedBySupervisors?draw=2&start=0&length=-1&search[value]=&search[regex]=false&questionnaireId=&questionnaireVersion=&reportType=5&columnCount=7&period=d&from=2021-08-10&supervisorId=&timezoneOffsetMinutes=-180&pageIndex=1&pageSize=50000&exportType=excel"]').click()
  })
})