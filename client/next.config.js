/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    apiUrl: process.env.REACT_APP_API_URL
  }
}

module.exports = nextConfig
