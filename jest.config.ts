import type { Config } from "@jest/types";
const config: Config.InitialOptions = {
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.ts$": "ts-jest",
    // 配置.vue结尾的文件使用的测试库
    "^.+\\.vue$": "@vue/vue3-jest",
    // 其他文件类型的转换
    ".+\\.(css|scss|png|jpg|svg)$": "jest-transform-stub",
  },
  testMatch: ["<rootDir>/src/**/*.spec.(t|j)s"],
  testEnvironment: "jsdom",
  transformIgnorePatterns: ["/node_modules/"],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  collectCoverageFrom: ["src/**/*.{js,vue}", "!src/main.ts", "!src/App.vue"],
  coverageThreshold: {
    global: {
      branches: 40,
      functions: 80,
      lines: 90,
      statements: 80,
    },
  },
};
export default config;
