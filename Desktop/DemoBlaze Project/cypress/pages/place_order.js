class PlaceOrderModule{

completeOrderFields(name, country, city, card, month, year){
  cy.get('#name').type(name);
  cy.get('#country').type(country);
  cy.get('#city').type(city);
  cy.get('#card').type(card);
  cy.get('#month').type(month);
  cy.get('#year').type(year);

}

clickOnPurchaseBtn() {
  cy.get('button[onclick="purchaseOrder()"]').click()
}

verifyConfirmationMessage() {
  cy.get('.sweet-alert>h2').contains('Thank you for your purchase!') 
}

selectCloseOrderModule() {
  cy.get('.confirm').click()
  cy.get('#orderModalLabel + button').click()
  cy.get('#nava').click()
}  
}

module.exports=new PlaceOrderModule();