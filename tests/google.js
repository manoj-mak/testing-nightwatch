module.exports = {
    '@tags' : ['google'],

    'Google advanced search: Pasta'(browser){
        
        const mainQuery = 'pasta';
        const mainQueryInputSelector = 'input[name="as_q"]';
        const languageDropDownSelector = '#lr_button';
        const languageValueSelector = '.goog-menuitem[value="lang_it"]';
        const lastUpdateDropDownSelector = '#as_qdr_button';
        const lastUpdateValueSelector = '.goog-menuitem[value="m"]';
        const submitSelector = '.jfk-button[type="submit"]'





        browser
              .url('https://www.google.co.in/advanced_search')
              .setValue(mainQueryInputSelector,mainQuery)
              .click(languageDropDownSelector)
              .click(languageValueSelector)
              .click(lastUpdateDropDownSelector)
              .click(lastUpdateValueSelector)
              .click(submitSelector)
              .assert.urlContains('as_q=pasta','params: query is pasta')
              .assert.urlContains('lr=lang_it','params: Language is italian')
              .assert.urlContains('as_qdr=m','params: results within last month')
              .saveScreenshot('tests_output/search.png')
    }
}