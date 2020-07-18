// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
Cypress.Commands.add("selectProduct", (productName) => {
  cy.get('h4.card-title').each(($el, index, $list) => {
    if ($el.text().includes(productName)) {
      cy.get('button.btn.btn-info').eq(index).click()
    }
  })
})

// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {
    const username = 'testUser'
    const password = 'pa55word'

    // it is ok for the username to be visible in the Command Log
    expect(username, 'username was set').to.be.a('string').and.not.be.empty
    // but the password value should not be shown
    if (typeof password !== 'string' || !password) {
      throw new Error('Missing password value, set using CYPRESS_password=...')
    }


  })


