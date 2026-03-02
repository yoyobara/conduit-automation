import { defineConfig, devices } from "@playwright/test";
import { env } from "./src/env";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: false,
  retries: 0,
  workers: 1,
  reporter: "html",
  use: {
    baseURL: env.CONDUIT_BASE_URL,
    trace: "on",
  },
  projects: [
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
  ],
});
