import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import js from '@eslint/js';
import globals from 'globals';

const config = [
  js.configs.recommended,
  reactPlugin.configs.flat.recommended,
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
