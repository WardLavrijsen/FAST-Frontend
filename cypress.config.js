const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "4o2v1i",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
