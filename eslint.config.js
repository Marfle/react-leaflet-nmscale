import tseslint from 'typescript-eslint';
import js from '@eslint/js';
import globals from 'globals';

const config = [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.cjs'],
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  }
];

export default config;
