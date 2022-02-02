const data = require('../data/reservation.json');

module.exports = {
    'Submit a reservation': function(browser) {
        
// retrieving page objects commands:     

        const frontPage = browser.page.reserveFrontPage();

// extracting data from reservation.json file:

        const name = data.name.item1;
        const email = data.email.item2;
        const phone = data.phone.item3;
        const time = data.time.item4;
        const persons = data.persons.item5;
        const dayMonth = data.dayMonth.item6;
        const year = data.year.item7;
        let monthDay = dayMonth.split('-').reverse().join('-');
        const fullDate = year + '-' + monthDay;

    frontPage.navigate()
    browser.windowMaximize()

// inputing values in form fields:


    frontPage.pageLoaded()
             .clickNameField()
             .enterName(name) 
             .clickEmailField()
             .enterEmail(email)
             .clickPhoneField()
             .enterPhoneNumber(phone)
             .clickDateField()
             .setDate(dayMonth.replace("-", ""))
    browser.keys(browser.Keys.RIGHT_ARROW)


    frontPage.setDate(year)
             .clickTimeField()
             .setTime(time)
             .clickPersonsField()
             .setPersons(persons)
             .clickSwitchButton()
             .clickReserveButton()
             

//asserting values in local storage:


    browser.execute(function(){
                 return window.localStorage
             },[],function(result){
                 this.assert.equal(result.value.name, name, "Provided name matches the name in local storage");
                 this.assert.equal(result.value.person, persons, "Provided number of persons matches the number of persons in local storage");
                 this.assert.equal(result.value.email, email, "Provided email matches the email in local storage");
                 this.assert.equal(result.value.time, time, "Provided time matches the time in local storage");
                 this.assert.equal(result.value.phone, phone, "Provided phone number matches the phone number in local storage");
                 this.assert.equal(result.value.parking, "on", "Parking choice matches the one in local storage");
                 this.assert.equal(result.value.date, fullDate, "Provided date matches the date in local storage");
             })
            .end();

 }
 };

