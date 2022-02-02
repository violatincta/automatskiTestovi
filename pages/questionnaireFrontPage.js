module.exports = {
    url: 'http://10.15.1.204:3000/questionaire',

elements: {
       
        foodButton: {
            selector: 'input#radioExample1'
        },
        rateButton: {
            selector: 'button.btn.btn-light.zt:nth-child(9)'
        },
        submitButton: {
            selector: 'button#submitQuestionaire'
        }

},

commands: [{
        
        clickFood: function (){
            return this.click('@foodButton')
        },
       
        clickRate: function(){
            return this.click('@rateButton')
        },

        submitQuestionnaire: function(){
            return this.click('@submitButton')
        }

    }]
}