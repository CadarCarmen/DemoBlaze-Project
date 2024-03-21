///<reference types="cypress"/>

import home_page, { phoneCategory } from "../../pages/home_page";
import cart_page from "../../pages/cart_page";
import monitors_prod_page from "../../pages/monitors_prod_page";
import phone_prod from "../../pages/phone_prod";


describe('Add two products from different categories, and delete one from the cart ', () => {

  before(()=>{
    cy.visit('');
  
  })
  
  it('Check if the cart displays one product', () => {
    home_page.monitorsCategory().click();
    monitors_prod_page.selectAppleMonitor();
    monitors_prod_page.addProductToCart();
    cy.get('#nava').click();
    home_page.phoneCategory().click();
    phone_prod.selectPhoneProd('Nexus 6');
    phone_prod.addToCartProduct();
    cart_page.selectCartPage();
    cy.contains('Delete').click()

  })
})