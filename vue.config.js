module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/sample-online-store/' // note the trailing slash
    : '/',
  }