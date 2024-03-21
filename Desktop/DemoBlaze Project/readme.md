Description PROJECT

This project contains automated tests using Cypress. The tests are structured using the Page Object Model (POM) design pattern to enhance test maintenance and reduce code duplication. Mochawesome reporter was configured to generate informative test reports. Additionally in support/e2e.js I wrote code to hide XHR requests when tests run, to keep command log clean and easy to read.

I created the next test:

1. Successful Order Test: I created a test to confirm that the order is successfully placed when all required data is provided.
2. Failure Test with Incomplete Data: I made a test to intentionally fail the order process by providing only partial data.
3. Product Quantity Verification Test: I created a test to verify that the correct quantity of products is added to the shopping cart.
4. Delete Product from Cart: For the final test, I verified deletion from the cart of a product.

Pre-requisites:

Visual Studio Code
Node.js

Installation:

To create a project type on terminal:
npm init -y
npm install cypress

Installation dependencies:

npm install cypress-mochawesome-reporter
npm install cypress-xpath

Run tests:

- type on CLI: npx cypress run --> this command will run all test files and finally will generate the mochawesome report(html report).
