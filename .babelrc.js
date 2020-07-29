const ENV = process.env.BABEL_ENV || process.env.NODE_ENV || 'development';
const pkg = require('./package.json');
const runtimeVersion = pkg.dependencies['@babel/runtime'];

const config = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          browsers: [
            'chrome > 74',
            'edge >= 18',
            'firefox >= 68',
            'ios >= 12',
            'opera >= 58',
            'safari >= 12',
            'samsung >= 10'
          ]
        },
        modules: false,
        loose: true,
        debug: false
      }
    ],
    '@babel/react'
  ],
  plugins: [
    [
      '@babel/transform-runtime',
      { version: runtimeVersion, useESModules: ['test', 'cjs'].some(s => s === ENV) ? false : true }
    ]
  ],
  env: {
    cjs: {
      plugins: ['@babel/transform-modules-commonjs']
    },
    test: {
      plugins: ['@babel/transform-modules-commonjs']
    }
  }
};

module.exports = config;
