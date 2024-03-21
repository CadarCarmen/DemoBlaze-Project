class PlaceOrderModule {

  enterDataFields(value1, value2){
    cy.get(`#${value1}`).type(value2);
  }

}

module.exports=new PlaceOrderModule();