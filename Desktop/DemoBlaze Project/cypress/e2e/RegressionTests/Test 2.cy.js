/// <reference types="cypress"/>

import home_page from "../../pages/home_page";
import phone_prod from "../../pages/phone_prod";
import cart_page from "../../pages/cart_page";
import place_order_module from "../../pages/place_order_module";
import place_order from "../../pages/place_order";

describe('Order a phone product, using insufficient data when shipping',()=>{

  before(()=>{
    cy.visit('');
  
  })
  
  it('Order a phone product', () => {
    home_page.phoneCategory().click();
    phone_prod.phoneProductsList();
    phone_prod.selectPhoneProd('Nokia lumia 1520');
    phone_prod.addToCartProduct();
    cart_page.selectCartPage();
    cart_page.checkCartContainsSelectedProd();
    cart_page.selectPlaceOrderBtn();
    cy.fixture('userData.json').then((data)=>{
      place_order_module.enterDataFields('name', data.name);
      place_order_module.enterDataFields('country', data.country);
      place_order_module.enterDataFields('city', data.city);
    });
    place_order.clickOnPurchaseBtn();
    cy.on('window:alert', (a) => {
      expect(['Please fill out Name and Creditcard.', 'Product added']).to.contain(a)
    });
    cy.get('#orderModalLabel + button').click()
    cy.get('#nava').click()







})
})