import HomePage from "../pageObjects/HomePage";
import ProductPage from "../pageObjects/ProductPage";


describe('Framework', () => {
  before(() => {
    cy.fixture('example.json').then(function (data) {
      this.data = data;
    })
  })
  it('should ', function () {
    const homePage = new HomePage()
    const productPage = new ProductPage()
    cy.visit(Cypress.env('url') + 'angularpractice')
    homePage.getEditBox().type(this.data.name)
    homePage.getGender().select(this.data.gender)
    homePage.getTwoWayDataBinding().should('have.value', this.data.name)
    homePage.getEditBox().should('have.attr', 'minlength', '2')
    homePage.getEntrepreneur().should('be.disabled')
    homePage.getShopTab().click()

    this.data.productName.forEach(function (el) {
      cy.selectProduct(el)
    })

    productPage.getCheckoutBtn().click()
    let sum = 0
    cy.get('tr td:nth-child(4) strong').each((el, index, list) => {
      let priceBefore = el.text()
      let priceAfter = priceBefore.split(' ')
      priceAfter = priceAfter[1].trim()
      sum = sum + Number(priceAfter)

    }).then(function () {
      cy.log(sum)
    })
    cy.get('h3 strong').then(function (el) {
      let price = el.text()
      let total = price.split(' ')
      total = total[1].trim()
      expect(sum).to.equal(Number(total))

    })

    cy.get('.btn.btn-success').click()
    cy.get('#country').type('India')
    cy.xpath('//div[@class="suggestions"]//a').click()
    cy.get('#checkbox2').check({force: true}).should('be.checked')
    cy.get('input[type="submit"]').click()
    cy.get('div.alert').then(function (el) {
      const text = el.text()
      expect(text.includes('Success')).true

    })


  });

})
