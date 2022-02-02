module.exports = {
    url: 'http://10.15.1.204:3000/menu',
    
    elements: {
        pageElement: {
            selector: 'div.menu-wrap:nth-child(2) div.menus:nth-child(5) button'
        },
        dessertButtonOne: {
            selector: "div.menu-wrap:nth-child(2) div.menus:nth-child(2) div.text button"
        },
        dessertButtonTwo: {
            selector: 'div.menu-wrap:nth-child(2) div.menus:nth-child(3) div.text button'
        },
        dessertButtonThree: {
            selector: 'div.menu-wrap:nth-child(2) div.menus:nth-child(4) button'
        },
        foodButtonOne: {
            selector: 'div.menu-wrap:nth-child(1) div.d-flex:nth-child(2) button'
        },
        foodButtonTwo: {
            selector: 'div.menu-wrap:nth-child(1) div.d-flex:nth-child(3) button'
        },
        totalPrice: {
            selector: 'span#ukupno'
        }

   },
    

    commands: [{
       
        scroll: function(){
            return this.moveToElement('@pageElement', 10, 10)
                       .waitForElementVisible('@pageElement', 5000, "Page is loaded")
        },
        addToCartOne: function(){
            return this.click('@dessertButtonOne')
        },
        addToCartTwo: function(){
            return this.click('@dessertButtonTwo')
        },
        addToCartThree: function(){
            return this.click('@dessertButtonThree')
        },
        addToCartFour: function(){
            return this.click('@foodButtonOne')
        },
        addToCartFive: function(){
            return this.click('@foodButtonTwo')
        },
        waitForTotal: function (){
            return this.waitForElementVisible('@totalPrice', 5000, "Total price is visible")
        }
    }]
}