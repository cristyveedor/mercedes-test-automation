const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    testIsolation: false,
    includeShadowDom: true,
    baseUrl: 'https://www.mercedes-benz.co.uk/'
  },
});