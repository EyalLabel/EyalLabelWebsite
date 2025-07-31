/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: { unoptimized: true },
    trailingSlash: true,
    // basePath removed for GitHub Pages deployment to root domain
};

module.exports = nextConfig;
