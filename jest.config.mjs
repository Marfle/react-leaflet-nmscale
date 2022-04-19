/* eslint-env node */

/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  testEnvironment: 'jsdom',
  extensionsToTreatAsEsm: ['.ts', '.tsx']
};

export default config;
