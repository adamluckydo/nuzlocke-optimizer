import type { Config } from "jest";
const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  coverageDirectory: "coverage",
  // Update paths to reflect directory structure
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/",
    "<rootDir>/damage-calc/"
  ],
  coveragePathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/",
    "<rootDir>/damage-calc/"
  ],
  // Add these configurations
  roots: ['<rootDir>/src', '<rootDir>/test'],
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/src/$1',  // Allows imports from src using @src
  }
};
export default config;
