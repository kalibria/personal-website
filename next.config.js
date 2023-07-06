/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true
    },
    typescript: {
        // todo remove this once website is done
        ignoreBuildErrors: true,
    },
    output: "export",
}

module.exports = nextConfig
