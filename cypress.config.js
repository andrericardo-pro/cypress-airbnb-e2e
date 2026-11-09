const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.airbnb.com.br",

    viewportWidth: 1366,
    viewportHeight: 768,

    defaultCommandTimeout: 10000,

    pageLoadTimeout: 60000,

    retries: {
      runMode: 2,
      openMode: 0
    },

    video: true,

    screenshotOnRunFailure: true
  }
});