class MonitorsProducts{
  
  selectAppleMonitor(){
    cy.contains('Apple monitor 24').click();
  }
  verifyProductName(){
    cy.contains('Apple monitor 24').should('be.visible');
  }
  addProductToCart(){
    cy.contains('Add to cart').click();
  }
}

module.exports=new MonitorsProducts();