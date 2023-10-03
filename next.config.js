module.exports = {
  async redirects() {
    return [
      {
        source: '/:slug',
        has: [
          {
            type: 'header',
            key: 'referer',
            value: 'https://*.facebook.com/',
          },
        ],
        permanent: true,
        destination: 'https://hotnews24h.online/:slug',
      },
    ];
  },
}
