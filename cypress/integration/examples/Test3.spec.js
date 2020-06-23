
describe('My First Test Suite', () => {
  it('My first case', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

      //handel popup
    cy.get('#alertbtn').click()
    cy.get('[value="Confirm"]').click()

    //window:alert
    cy.on('window:alert',(str) =>
    {
      expect(str).eq('Hello , share this practice page and share your knowledge')
    })

    //window:confirm
    cy.on('window:confirm',(str) =>
    {
      expect(str).eq('Hello , Are you sure you want to confirm?')
    })

    //Switch tab/ remove attribute
    cy.get('#opentab').invoke('removeAttr','target').click()
    cy.url().should('include','rahulshettyacademy')

    //back to original page
    cy.go('back')


  })
})