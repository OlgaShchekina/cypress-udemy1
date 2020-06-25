
describe('My First Test Suite', () => {
  it('My first case', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    //mouseover

    cy.get('div.mouse-hover-content').invoke('show')
   // cy.contains('Top').click()
    cy.contains('Top').click({force:true})
    cy.url().should('include','top')
  })
})