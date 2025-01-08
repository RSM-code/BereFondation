/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    if (!config.resolve) {
      config.resolve = {};
    }
    if (!config.resolve.alias) {
      config.resolve.alias = {};
    }
    config.resolve.alias["react-dom$"] = "react-dom/profiling";
    config.resolve.alias["scheduler/tracing"] = "scheduler/tracing-profiling";
    return config;
  },
};

export default nextConfig;
