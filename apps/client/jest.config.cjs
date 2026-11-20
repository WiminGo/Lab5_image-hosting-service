const path = require('path')

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  testMatch: ['**/*.test.ts', '**/*.test.tsx'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
    '^react$': path.resolve(__dirname, '../../node_modules/react'),
    '^react-dom$': path.resolve(__dirname, '../../node_modules/react-dom'),
    '^react/jsx-runtime$': path.resolve(__dirname, '../../node_modules/react/jsx-runtime'),
    '^react/jsx-dev-runtime$': path.resolve(__dirname, '../../node_modules/react/jsx-dev-runtime'),
    '^@image-host/ui$': '<rootDir>/../../packages/ui/src/index.ts',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy'
  }
}