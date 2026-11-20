module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    'no-var': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    'semi': ['error', 'never'],
    'indent': ['error', 2],
    'no-multiple-empty-lines': ['error', { max: 1 }]
  }
};