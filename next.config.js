/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true
    },
    typescript: {
        ignoreBuildErrors: false,
    },
    output: "export",
}

module.exports = nextConfig
