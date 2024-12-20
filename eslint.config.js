import tseslint from 'typescript-eslint';
import js from '@eslint/js';
import globals from 'globals';

const config = [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['__tests__/**'],
    languageOptions: {
      globals: {
        ...globals.jest
      }
    }
  },
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
