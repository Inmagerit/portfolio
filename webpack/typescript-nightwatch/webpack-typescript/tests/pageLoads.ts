import { NightwatchBrowser } from 'nightwatch';

module.exports = {
  'home Loads Correctly': (browser: any) => {
    const nightwatchBrowser = browser as NightwatchBrowser;

    nightwatchBrowser
      .url('http://localhost:8080/')
     
      .assert.titleEquals('Document')
      .waitForElementVisible('body', 5000)
      .end();
  },

  
};