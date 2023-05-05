const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    testIsolation: false,
    includeShadowDom: true,
    baseUrl: 'http://www.mercedes-benz.co.uk/'
  },
});