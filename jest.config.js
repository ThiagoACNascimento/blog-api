import dotenv from "dotenv";

dotenv.config({
  path: ".env.development",
});

export default {
  testEnvironment: "node",
  moduleDirectories: ["node_modules", "<rootDir>"],
  testTimeout: 6000,
  transform: {},
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
  },
};
