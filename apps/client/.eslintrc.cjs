module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint'],
  rules: {
    'no-var': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    'semi': ['error', 'never'],
    'indent': ['error', 2],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
}