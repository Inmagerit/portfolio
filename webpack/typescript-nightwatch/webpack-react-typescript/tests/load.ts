module.exports = {
  'Test Component Interaction Page one': function(browser) {
    browser

      .url('http://192.168.1.136:8080/')
      .waitForElementVisible('body', 1000)
      .click('a')
        //.assert.containsText('#component-output', 'Component output text')

      .end();
  },
  'Test Component Interaction Page two': function(browser) {
    browser

      .url('http://192.168.1.136:8080/pageTwo.html')
      .waitForElementVisible('body', 1000)
      .click('a')
        //.assert.containsText('#component-output', 'Component output text')

      .end();
  }
};
