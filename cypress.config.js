const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    projectId: 'ymfpgm',
    baseUrl: 'https://www.testingnotebook.com',
    setupNodeEvents(on, config) {
      return null
    },
  },
})
