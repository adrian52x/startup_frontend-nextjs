/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          'lh3.googleusercontent.com',
          'i.imgur.com'
        ]
      },

      async headers() {
        return [
          {
            source: '/(.*)',
            headers: [
              {
                key: 'Content-Security-Policy',
                value: "default-src 'self'; img-src 'self' https://imgur.com;",
              },
            ],
          },
        ]
      },
}

module.exports = nextConfig
