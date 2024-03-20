import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import { vercelPreset } from "@vercel/remix/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { flatRoutes } from "remix-flat-routes";

installGlobals();

export default defineConfig({
  plugins: [
    remix({
      presets: [vercelPreset()],
      ignoredRouteFiles: ["**/*"],
      routes(defineRoutes) {
        return flatRoutes("routes", defineRoutes, {
          ignoredRouteFiles: [".*", "**/*.css", "**/*.test.{js,jsx,ts,tsx}", "**/__*.*"],
        });
      },
    }),
    tsconfigPaths(),
  ],
});
