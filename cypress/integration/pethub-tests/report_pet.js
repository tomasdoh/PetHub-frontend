context('Assertions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/pets/create')
  })

  describe('The page loads as expected', function() {
    it('visits the page with a 202 status code', function() {
      expect(true).to.equal(true)

      cy.focused()
        .should('have.class', 'form-name')
        .should('have.class', 'form-owner')
        .should('have.class', 'form-description')
        .should('have.class', 'form-picture')
        .should('have.class', 'form-status')
    })

    it.only('name input field accepts input', function() {
      const pet_name = 'Milo'
      cy.get('.form-name')
        .type(pet_name)
        .should('have.value', pet_name)
    })

    it.only('owner input field accepts input', function() {
      const owner = 'Jane Doe'
      cy.get('.form-owner')
        .type(owner)
        .should('have.value', owner)
    })

    it('clicks button', function() {
      cy.get(button).click()
    })
  })
})
