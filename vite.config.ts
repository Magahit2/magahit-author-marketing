// @lovable.dev/vite-tanstack-config already includes the required
// TanStack Start, React, Tailwind, path alias, and other plugins.

import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isGitHubActions = process.env['GITHUB_ACTIONS'] === "true";

export default defineConfig({
  // GitHub Pages can only serve static files.
  // Disable the server/Nitro output during the GitHub Actions build.
  ...(isGitHubActions ? { nitro: false as const } : {}),

  tanstackStart: isGitHubActions
    ? {
        prerender: {
          enabled: true,
          crawlLinks: true,
          failOnError: false,
        },
      }
    : {
        server: { entry: "server" },
      },
});
