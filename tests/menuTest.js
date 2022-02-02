
module.exports = {
    'Verify that cart total is correct after adding items': function(browser) {
        
// retrieving page objects commands:     

    const frontPage = browser.page.menuFrontPage();     

    frontPage.navigate()
    browser.windowMaximize()

// adding items to the cart:

    frontPage.scroll()
            .addToCartOne()
    browser.waitForElementVisible('#listaItema li:nth-child(1)', 5000, "Product 1 was added to cart")
    frontPage.addToCartTwo()
    browser.waitForElementVisible('#listaItema li:nth-child(2)', 5000, "Product 2 was added to cart")
    frontPage.addToCartThree()
    browser.waitForElementVisible('#listaItema li:nth-child(3)', 5000, "Product 3 was added to cart")
    frontPage.addToCartFour()
    browser.waitForElementVisible('#listaItema li:nth-child(4)', 5000, "Product 4 was added to cart")
    frontPage.addToCartFive()
    browser.waitForElementVisible('#listaItema li:nth-child(5)', 5000, "Product 5 was added to cart")
    frontPage.addToCartOne()
    browser.waitForElementVisible('#listaItema li:nth-child(6)', 5000, "Product 1 was added to cart twice")
    frontPage.waitForTotal()
 
// verifying total amount:

    browser.getText("div.menu-wrap:nth-child(2) div.menus:nth-child(2) span.price", function (result){
           var dessertPriceOne = Number(result.value.replace("$",""))*2
      
        browser.getText("div.menu-wrap:nth-child(2) div.menus:nth-child(3) span.price", function (result){
            var dessertPriceTwo = Number(result.value.replace("$",""))

            browser.getText("div.menu-wrap:nth-child(2) div.menus:nth-child(4) span.price", function (result){
                var dessertPriceThree = Number(result.value.replace("$",""))
                
                browser.getText("div.menu-wrap:nth-child(1) div.d-flex:nth-child(2) span.price", function (result){
                    var foodPriceOne = Number(result.value.replace("$",""))
                    
                    browser.getText("div.menu-wrap:nth-child(1) div.d-flex:nth-child(3) span.price", function (result){
                        var foodPriceTwo = Number(result.value.replace("$",""))
                        
                        browser.getText('span#ukupno', function (result){
                            var expectedTotal = Number(result.value.replace("$",""))
                            var actualTotal = dessertPriceOne + dessertPriceTwo + dessertPriceThree + foodPriceOne + foodPriceTwo;
                            browser.assert.equal(actualTotal, expectedTotal, "Cart total is correct")
                        })
                    })
                    
                })
                
            })
            
        })
   })
 }
 };

