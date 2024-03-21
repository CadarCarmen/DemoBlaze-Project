class LaptopsProducts{

  laptopsProducts() {
    return cy.get('#tbodyid')
}

selectLaptop(product) {
    cy.get('.card-title>a').contains(product).click();
}
addTwiceToCart(){
  cy.contains('Add to cart').click();
  cy.contains('Add to cart').click();
}

}



module.exports=new LaptopsProducts();