/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // The protocol (usually 'https' for CDNs)
        hostname: 'cdn.sanity.io', // The domain you're allowing
        port: '', // Leave empty if you're using default ports
        pathname: '/**', // Allow all paths (you can specify more specific patterns if needed)
      },
    ],
  },
};

export default nextConfig;
