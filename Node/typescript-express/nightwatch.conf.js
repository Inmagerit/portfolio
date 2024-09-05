module.exports = {
  src_folders: ['tests', 'nightwatch'],

  page_objects_path: [],

  custom_commands_path: [],

  custom_assertions_path: [],

  plugins: [],

  globals_path: '',

  webdriver: {},

  test_workers: {
    enabled: true,
  },

  test_settings: {
    default: {
      disable_error_log: false,
      launch_url: 'http://localhost:3000', // Note the corrected URL format

      screenshots: {
        enabled: false,
        path: 'screens',
        on_failure: true,
      },

      desiredCapabilities: {
        browserName: 'chrome',
      },

      webdriver: {
        start_process: true,
        server_path: require('geckodriver').path,
        cli_args: [],
      },
    },

    /*chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          w3c: true,
          args: [],
        },
      },

      webdriver: {
        start_process: true,
        server_path:
          'C:\\Users\\Oscar\\Desktop\\Portfolio\\typescript-express\\node_modules\\chromedriver\\bin\\chromedriver',
        cli_args: [],
      },
    },*/

    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        'moz:firefoxOptions': {
          args: [],
        },
      },

      webdriver: {
        start_process: true,
        server_path: require('geckodriver').path,
        cli_args: [],
      },
    },
  },
};
