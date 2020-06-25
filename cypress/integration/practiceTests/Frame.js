///<reference types="Cypress"/>
///<reference types="Cypress-iframe"/>

import 'cypress-iframe'
describe('Frame test', () => {
  it('demo example', () => {
    cy.visit(Cypress.env('url')+'AutomationPractice/')
    cy.frameLoaded('#courses-iframe')
    cy.iframe().find('a[href*="mentorship"]').eq(0).click()

    cy.iframe().find('h1[class*="pricing-title"]').should('have.length',2)


  })
})