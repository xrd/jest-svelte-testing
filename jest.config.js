module.exports = {
  moduleFileExtensions: ['js', 'svelte'],
  moduleNameMapper: {
    '^utils(.*)$': '<rootDir>/src/utils$1',
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(@smui)/)',
    // 'node_modules/(?!(@material)/)',
  ],
  testPathIgnorePatterns: ['/node_modules/', '/cypress/'],
  setupFilesAfterEnv: [
    // '<rootDir>/jest.setup.js',
    '@testing-library/jest-dom/extend-expect',
  ],
  transform: {
    // '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '^.+\\.svelte$': ['svelte-jester', { preprocess: false }],
  },
  collectCoverageFrom: [
    '!./src/client.js',
    '!./src/server.js',
    '!./src/service-worker.js',
    './src/**/*.svelte',
    './src/**/*.ts',
    './src/**/*.js',
  ],
};
