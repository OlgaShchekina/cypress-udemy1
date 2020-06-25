
describe('My First Test Suite', () => {
  it('My first case', () => {
    cy.visit(Cypress.env('url')+'seleniumPractise/#/')
    cy.get('.search-keyword').type('ca')
    cy.wait(1000)
    cy.get('.products').as('productLocator')
    cy.get('.product:visible').should('have.length',4)
    cy.get('@productLocator').find('.product').should('have.length',4)
    cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()
    cy.get('@productLocator').find('.product')
      .each(($el, index, $list) =>
    {
      const textVeg = $el.find('h4.product-name').text()
      if (textVeg.includes('Cashews'))
      {
        cy.wrap($el.find('button')).click()
      }
    })
  //assert if logo text is correctly displayed
    cy.get('.brand').should('have.text','GREENKART')

    //this is to print in logs
    cy.get('.brand').then(function (logoelement)
    {
      cy.log(logoelement.text());

    })




  })
})