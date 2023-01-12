import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://www.uitestingplayground.com",
    env: {
      demoPage: "https://demoqa.com",
    },
  },

  chromeWebSecurity: false,

  component: {
    viewportHeight: 1080,
    viewportWidth: 1920,
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
