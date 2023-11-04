const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    projectId: 'ymfpgm',
    baseUrl: 'https://www.testingnotebook.com',
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config)
      return config
    },
    env: {
      grepFilterSpecs: true,
    },
  },
})
