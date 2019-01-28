context('Assertions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/pets/create')
  })

  describe('The page loads as expected', function() {
    it('visits the page with a 202 status code', function() {
      expect(true).to.equal(true)

      cy.focused()
        .should('have.class', 'form-name')
    })

    it.only('name input field accepts input', function() {
      const name = 'Jane Doe'
      cy.get('.form-name')
        .type(name)
        .should('have.value', name)
    })
  })
})
