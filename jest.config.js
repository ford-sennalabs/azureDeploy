module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/build/',
    '<rootDir>/node_modules/'],
  collectCoverage: true,
  transformIgnorePatterns: ['<rootDir>/node_modules/']
}