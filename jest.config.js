module.exports = {
  collectCoverageFrom: ['src/**/*.js'],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  testMatch: ['**/?(*.)test.js'],
  testEnvironment: 'node',
  moduleDirectories: ['node_modules'],
  coveragePathIgnorePatterns: ['index.js'],
};
