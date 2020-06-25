
describe('My First Test Suite', () => {
  it('My first case', () => {
    cy.visit(Cypress.env('url')+'AutomationPractice/')
    //get attribute value
    cy.get('#opentab').then(function (el)
    {
      const url = el.prop('href')
      cy.visit(url)
    })
//работать не будет ,т.к. невозможно открыть другой домен с помощью visit, нужно использовать удаление атрибута из тест3
  })
})