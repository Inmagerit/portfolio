import { NightwatchBrowser } from 'nightwatch';

module.exports = {
  'home Loads Correctly': (browser: any) => {
    const nightwatchBrowser = browser as NightwatchBrowser;

    nightwatchBrowser
      .url('http://localhost:3000')
     
      .assert.titleEquals('Home')
      .waitForElementVisible('body', 5000)
      .end();
  },

  'profile page loads': (browser: any) => {
    const nightwatchBrowser = browser as NightwatchBrowser;

    nightwatchBrowser
      .url('http://localhost:3000/profile')
      .waitForElementVisible('body', 5000)
      .assert.titleEquals('Profile')
      .end();
  },

  'contact page Loads ': (browser: any) => {
    const nightwatchBrowser = browser as NightwatchBrowser;

    nightwatchBrowser
      .url('http://localhost:3000/contact')
      .waitForElementVisible('body', 5000)
      .assert.titleEquals('Contact')
      .end();
  },

};