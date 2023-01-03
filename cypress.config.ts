import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl:"https://www.uitestingplayground.com",
    env:{
      demoPage: "https://demoqa.com"
    }
  },
  chromeWebSecurity:false
});
