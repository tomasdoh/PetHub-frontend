context('Assertions', () => {
  beforeEach(() => {
    cy.visit('http://pet-hub.herokuapp.com/pets/create')
  })

  describe('My first test', function() {
    it('Does not do much', function() {
      expect(true).to.equal(true)
    })
  })
})
