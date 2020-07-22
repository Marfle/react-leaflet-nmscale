const ENV = process.env.BABEL_ENV || process.env.NODE_ENV || 'development';
const pkg = require('./package.json');
const runtimeVersion = pkg.dependencies['@babel/runtime'];

const config = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          ie: 11,
          node: 'current'
        },
        modules: false,
        loose: true
      }
    ],
    '@babel/react'
  ],
  plugins: [
    [
      '@babel/transform-runtime',
      { version: runtimeVersion, useESModules: ENV === 'test' ? false : true }
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
