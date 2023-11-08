const { defineConfig } = require("cypress");
const env = require('./env.config');

const baseUrl = env.baseUrl

module.exports = defineConfig({
  ...process.env,
  retries: 1,
  reporter: 'cypress-mochawesome-reporter',
  screenshotOnRunFailure: true,
  video: true,
  videoCompression: false,
  reporterOptions: {
    overwrite: true,
    charts: true,
    embeddedScreenshots: true,
    videoOnFailOnly: false,
    inlineAssets: false,
    saveAllAttempts: true,
  },
  e2e: {
    baseUrl,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
