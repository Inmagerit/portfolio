import { NightwatchBrowser } from 'nightwatch';

module.exports = {
  '@tags': ['accessibility'],
  'Accessbility Test - Home Page': (browser: NightwatchBrowser) => {
    browser
      .url('http://localhost:3000')
      .axeInject()
      .axeRun('body')
      .end();
  },
  'Accessbility Test - Profile Page': (browser: NightwatchBrowser) => {
    browser
      .url('http://localhost:3000/profile')
      .axeInject()
      .axeRun('body')
      .end();
  },
  'Accessbility Test - Contact Page': (browser: NightwatchBrowser) => {
    browser
      .url('http://localhost:3000/contact')
      .axeInject()
      .axeRun('body')
      .end();
  },
};
