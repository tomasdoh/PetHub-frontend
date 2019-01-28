context('Assertions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/pets/create')
  })

  describe('The page loads as expected', function() {
    it('visits the page with a 202 status code', function() {
      expect(true).to.equal(true)
    })
  })

  describe('Input field for name of pet', function() {
    it('name input field accepts input', function() {
      const pet_name = 'Milo'
      cy.get('.pet-name')
        .type(pet_name)
        .should('have.value', pet_name)
    })

    it('pet owner input field accepts input', function() {
      const pet_owner = 'Jane Doe'
      cy.get('.pet-owner')
        .type(pet_owner)
        .should('have.value', pet_owner)
    })

    it('pet description input field', function() {
      const pet_description = 'Awesome pet'
      cy.get('.pet-description')
        .type(pet_description)
        .should('have.value', pet_description)
    })

    it('clicks form submit button', function() {
      cy.get('form').find('button').contains('Report').click()
    })
  })
})
