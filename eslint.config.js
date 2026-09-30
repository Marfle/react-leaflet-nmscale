import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import js from '@eslint/js';

const config = defineConfig([
  js.configs.recommended,
  ...tseslint.configs.recommended
]);

export default config;
