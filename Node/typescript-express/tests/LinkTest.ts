import { NightwatchBrowser } from 'nightwatch';

module.exports = {
  '@tags': ['navigation'],
  'Navigate to Different Pages': (browser: NightwatchBrowser) => {
    browser
      // Navigate to Home Page
      .url('http://localhost:3000/')
      .waitForElementVisible('body', 5000)
      .assert.urlEquals('http://localhost:3000/') 

      // Navigate to Profile Page
      .url('http://localhost:3000/profile')
      .waitForElementVisible('body', 5000)
      .assert.urlEquals('http://localhost:3000/profile') 

      // Navigate to Contact Page
      .url('http://localhost:3000/contact')
      .waitForElementVisible('body', 5000)
      .assert.urlEquals('http://localhost:3000/contact') 

      .end();
  },
};
