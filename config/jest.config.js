module.exports = {
  // Setting the root to the actual root, since this file is in root/config
  preset: 'ts-jest',
  rootDir: '../',
  roots: ['<rootDir>/src', '<rootDir>/tests/unit'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '\\.(html|xml|txt|md)$': 'jest-raw-loader',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom', 'jest-extended'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    // Allow `src/` to map to `src/` in Jest tests
    'src/(.*)$': '<rootDir>/src/$1',
    'tests/(.*)$': '<rootDir>/tests/$1',
    '\\.(css|less)$': '<rootDir>/tests/__mocks__/styleMock.ts',
  },
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
}
