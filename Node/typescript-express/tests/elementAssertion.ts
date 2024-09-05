import { NightwatchBrowser } from 'nightwatch';

module.exports = {
  'Home Page Loads Correctly': (browser: NightwatchBrowser) => {
    browser
      .url('http://localhost:3000/')
      .pause(3000)
      .assert.elementPresent('a')
      .assert.elementPresent('div')
      .assert.elementPresent('button')
      // DE MOMENTO NINGUN ul EN INDEX     .assert.elementPresent('ul')
      // DE MOMENTO NINGUN li EN INDEX     .assert.elementPresent('li')
      .assert.elementPresent('h1')
      .end();
  },

  'Profile Page Loads Correctly': (browser: NightwatchBrowser) => {
    browser
      .url('http://localhost:3000/profile')
      .pause(3000)
      .assert.elementPresent('a')
      .assert.elementPresent('div')
      .assert.elementPresent('button')
      .assert.elementPresent('ul')
      .assert.elementPresent('li')
      .assert.elementPresent('h1')
      .end();
  },

  'Contact Page Loads Correctly': (browser: NightwatchBrowser) => {
    browser
      .url('http://localhost:3000/contact')
      .pause(3000)
      .assert.elementPresent('a')
      .assert.elementPresent('div')
      .assert.elementPresent('button')
      // DE MOMENTO NINGUN ul EN CONTACT  .assert.elementPresent('ul')
      // DE MOMENTO NINGUN li EN CONTACT  .assert.elementPresent('li')
      .assert.elementPresent('h1')
      .end();
  }
};
