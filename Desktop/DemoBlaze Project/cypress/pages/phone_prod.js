class PhoneProducts{
  phoneProductsList(){
    cy.get('#tbodyid>div').should('be.visible');
}
  selectPhoneProd(model){
    cy.contains(model).click();
  }
  addToCartProduct(){
    cy.contains('Add to cart').click();
  }

}

module.exports=new PhoneProducts();