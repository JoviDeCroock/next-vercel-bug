module.exports = {
  basePath: '',
  async rewrites() {
    return [
      {
        source: '/author',
        destination: 'https://jovidecroock.com',
      },
    ]
  },
}
