class CartPage{

  selectCartPage(){
    cy.get('#cartur').click();
  }
  checkCartContainsSelectedProd(){
    cy.get('.success').should('be.visible');
  }
  selectPlaceOrderBtn(){
    cy.xpath('//button[@class="btn btn-success"]').click();
  }
}

module.exports=new CartPage();