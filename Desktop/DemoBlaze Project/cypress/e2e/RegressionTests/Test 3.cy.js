///<reference types="cypress"/>

import home_page from "../../pages/home_page";
import cart_page from "../../pages/cart_page";
import laptops_prod from "../../pages/laptops_prod";

describe('Order twice the same product and verify the cart quantity ', () => {

  before(()=>{
    cy.visit('');
  
  })
  
  it('Add to cart twice the same product', () => {
    home_page.laptopsCategory().click();
    laptops_prod.laptopsProducts().should('be.visible');
    laptops_prod.selectLaptop('MacBook Pro');
    laptops_prod.addTwiceToCart();
    cart_page.selectCartPage();
    cart_page.checkCartContainsSelectedProd();

  })

})