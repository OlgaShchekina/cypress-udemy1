
describe('My First Test Suite', () => {
  it('My first case', () => {
    cy.visit(Cypress.env('url')+'AutomationPractice/')

    //find element in table
    cy.xpath('//table[@id="product"]//tr//td[2]')
      .each(($el,index,$list) => {
        const  text = $el.text()
        if (text.includes('Python'))
        {
          cy.xpath('//table[@id="product"]//tr//td[2]').eq(index).next().then(function (price)
          {
            const  priceText = price.text()
            expect(priceText).to.equal('25')
          })
        }

    })


  })
})