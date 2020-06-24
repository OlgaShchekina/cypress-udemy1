describe('My First Test Suite', () => {
  it('My first case', () => {
    cy.visit('https://www.chess.com/')

    cy.get('[data-panel="play"]').trigger('mouseenter')
    cy.contains('Live Chess').click()
    cy.url().should('include','live')
})
})

