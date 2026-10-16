// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  { ignores: ['dist/*', 'backup/*', 'coverage/*'] },
  {
    // Globales de Jest para los archivos de prueba
    files: ['**/*.test.js', '**/*.test.ts', '**/*.test.tsx'],
    languageOptions: {
      globals: { describe: 'readonly', test: 'readonly', it: 'readonly', expect: 'readonly', beforeEach: 'readonly', afterEach: 'readonly', jest: 'readonly' },
    },
  },
  {
    // Patron de hidratacion intencional (plantilla de Expo)
    files: ['src/hooks/use-color-scheme.web.ts'],
    rules: { 'react-hooks/set-state-in-effect': 'off' },
  },
]);
