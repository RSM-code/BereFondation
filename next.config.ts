// next.config.ts
import type { NextConfig } from "next";
import type { Configuration as WebpackConfig } from "webpack";

const config: NextConfig = {
  reactStrictMode: true,
  webpack: (config: WebpackConfig) => {
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
