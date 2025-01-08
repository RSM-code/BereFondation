// next.config.ts
import type { Configuration } from "webpack";
import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,
  webpack: (config: Configuration) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "react-dom$": "react-dom/profiling",
      "scheduler/tracing": "scheduler/tracing-profiling",
    };
    return config;
  },
};

export default config;
