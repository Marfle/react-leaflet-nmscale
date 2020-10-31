const ENV = process.env.BABEL_ENV || process.env.NODE_ENV || 'development';

const config = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          browsers: [
            'chrome > 74',
            'edge >= 81',
            'firefox >= 68',
            'ios >= 12',
            'opera >= 58',
            'safari >= 12',
            'samsung >= 10'
          ]
        },
        modules: false,
        loose: true,
        bugfixes: true,
        debug: false
      }
    ],
    '@babel/react',
    '@babel/typescript'
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
