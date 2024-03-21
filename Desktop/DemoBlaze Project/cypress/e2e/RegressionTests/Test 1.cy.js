///<reference types="cypress"/>

import home_page from "../../pages/home_page";
import monitors_prod_page from "../../pages/monitors_prod_page";
import cart_page from "../../pages/cart_page";
import place_order from "../../pages/place_order";

describe('Order a monitor product using valid data', () => {

  before(()=>{
    cy.visit('');
  
  })
  
  it('Order a monitor product', () => {
    home_page.monitorsCategory().click();
    monitors_prod_page.selectAppleMonitor();
    monitors_prod_page.verifyProductName();
    monitors_prod_page.addProductToCart();
    cart_page.selectCartPage();
    cart_page.checkCartContainsSelectedProd();
    cart_page.selectPlaceOrderBtn();
    place_order.completeOrderFields('John', 'US', 'San Diego', 1263, 7, 42);
    place_order.clickOnPurchaseBtn();
    place_order.verifyConfirmationMessage();
    place_order.selectCloseOrderModule();

  })

})