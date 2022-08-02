const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 60000,

  e2e: {
    baseUrl: "http://www.webdriveruniversity.com",
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
  },
  env: {
    webdriveruni_homepage: "http://www.webdriveruniversity.com",
    first_name: "John",
    last_name: "Curry",
    email: "johncurry@gmail.com",
    message: "Hi, i am john curry!!!!!!! How are you?",
  },
});
