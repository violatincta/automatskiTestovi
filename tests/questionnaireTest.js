module.exports = {

'Fill out and submit the questionnaire': function(browser) {


// retrieving page objects commands: 
    const frontPage = browser.page.questionnaireFrontPage();     

    
    frontPage.navigate()
    browser.windowMaximize()


// clicking the radio button

    frontPage.clickFood()

// acknowledging the checkbox

    browser
            .waitForElementVisible(".card iframe#first", 3000, "Multiple options are visible")
            .pause(2000)
            .frame(0)
            .waitForElementPresent("#cb2", 3000, "Cievapcici choice is visible")
            .click("#cb2")
            .frameParent()

// filling out the modal

    browser
            .click ('div.col-lg-8 > button:nth-child(5)')
            .waitForElementVisible("div.modal-content", 3000, "Modal is visible")
            .pause(2000)
            .waitForElementPresent("input#radio4Example2", 2000, "Rating options are visible")
            .click('input#radio4Example2')
            .setValue('textarea#hwofTA', "Modal tekst")
            .click('div.modal-footer button.btn')

// moving the slider

    browser
            .waitForElementVisible(".card iframe#third", 3000, "Slider box is visible")
            .pause(2000)
            .frame(1)
            .waitForElementPresent("input#rng", 3000, "Slider is visible")
            .setValue("input#rng", new Array(2).fill(browser.Keys.RIGHT_ARROW))
            .frameParent()        

// rating the staff

    frontPage.clickRate()


// giving feedback

    browser
             .waitForElementVisible(".card iframe#second", 3000, "Feedback box is visible")
             .pause(2000)
             .frame(2)
             .waitForElementPresent("form textarea#frta", 3000, "Text area is visible")
             .setValue("form textarea#frta", "bla bla")
             .frameParent()
    

    frontPage.submitQuestionnaire()

// cookie assertion not completed


}
}
