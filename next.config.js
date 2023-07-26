/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	experimental: {
		appDir: true,
	},
	images: {
		domains: ['media.graphassets.com'],
		dangerouslyAllowSVG: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
};

module.exports = nextConfig;
