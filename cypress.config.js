const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    //This can implement Azure library variables
    baseUrl: process.env.ENVIRONMENT_URL || 'https://www.latlong.net/'
  }
});
