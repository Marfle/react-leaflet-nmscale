const config = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          browsers: [
            'chrome > 90',
            'edge >= 90',
            'firefox >= 91',
            'ios >= 14',
            'opera >= 74',
            'safari >= 14'
          ]
        },
        modules: false,
        loose: true,
        bugfixes: true,
        debug: false
      }
    ],
    ['@babel/react', { runtime: 'automatic' }],
    '@babel/typescript'
  ]
};

module.exports = config;
