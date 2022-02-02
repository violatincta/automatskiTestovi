module.exports = {
    url: 'http://10.15.1.204:3000/reserve',
    
    elements: {
        header: {
            selector: 'span.subheading'
        },
        nameField: {
            selector: 'input#name'
        },
        emailField: {
            selector: 'input#email'
        },
        phoneField: {
            selector: 'input#phone'
        },
        dateField: {
            selector: 'input#date'
        },
        timeField: {
            selector:'input#time'
        },
        personsField: {
            selector:'select#persons'
        },
        switchButton: {
            selector:'[for="switch-1"]'
        },
        reserveButton: {
            selector: 'input#submitForm'
        }
    
    },
    

    commands: [{
        pageLoaded: function(){
            return this.waitForElementVisible('@nameField', "Page is loaded")
        },
        clickNameField: function(){
            return this.click('@nameField')
        },
        enterName: function (item){
            return this.setValue ('@nameField', item)
        },
        clickEmailField: function(){
            return this.click('@emailField')
        },
        enterEmail: function (item){
            return this.setValue ('@emailField', item)
        },
        clickPhoneField: function(){
            return this.click('@phoneField')
        },
        enterPhoneNumber: function(item){
            return this.setValue('@phoneField', item)
        },
        clickDateField: function(){
           return this.click('@dateField')
        },
        setDate: function(datum){
            return this.setValue('@dateField', datum)
        },
        clickTimeField: function(){
           return this.click('@timeField')
        },
        setTime: function(time){
            return this.setValue('@timeField', time)
        },
        clickPersonsField: function(){
            return this.click('@personsField')
        },
        setPersons: function(persons){
            return this.setValue('@personsField', persons)
        },
        clickSwitchButton: function(){
            return this.click('@switchButton')
        },
        clickReserveButton: function(){
            return this.click('@reserveButton')
        }


    }]
}