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
        debug: false
      }
    ],
    ['@babel/react', { runtime: 'automatic' }],
    '@babel/typescript'
  ]
};

export default config;
