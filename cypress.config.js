const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "zu2dey",
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 60000,

  e2e: {
    baseUrl: "http://www.webdriveruniversity.com",
    // viewportHeight: 500,
    // viewportWidth: 400,

    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
  },
  env: {
    first_name: "John",
    last_name: "Curry",
    email: "johncurry@gmail.com",
    message: "Hi, i am john curry!!!!!!! How are you?",
  },
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "reporter-config.json",
  },
});
