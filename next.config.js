module.exports = {
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "https://portfolio-szheron.vercel.app/" }
        ]
      }
    ]
},
}
