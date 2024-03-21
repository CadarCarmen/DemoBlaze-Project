class HomePage {
  
  phoneCategory() {
      return cy.contains('Phones')
  }

  laptopsCategory() {
      return cy.contains('Laptops')
  }

  monitorsCategory() {
      return cy.contains('Monitors')
  }

  clickCartBtn() {
      cy.get('[id="cartur"]').click()
  }
}
module.exports = new HomePage()