const { defineConfig } = require('@playwright/test');
const { defineBddConfig } = require('playwright-bdd');

const testDir = defineBddConfig({
  features: 'tests/features/*.feature',
  steps: 'tests/steps/*.js',
});

module.exports = defineConfig({
  testDir,
  reporter: 'html',
  use: {
    headless: false,
  },
});
