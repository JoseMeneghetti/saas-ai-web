/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["oaidalleapiprodscus.blob.core.windows.net"],
  },
  env: {
    BACK_END_URL: process.env.BACK_END_URL,
  },
};

module.exports = nextConfig;
