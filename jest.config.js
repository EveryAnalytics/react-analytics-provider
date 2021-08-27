module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules'],
  testPathIgnorePatterns: ['/demo/', '/build/'],
};
