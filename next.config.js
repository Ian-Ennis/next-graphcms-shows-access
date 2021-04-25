const path = require('path')

module.exports = {
  future: {
    webpack5: true,
  },
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    config.resolve.alias['@c'] = path.join(__dirname, 'components')
    config.resolve.alias['@l'] = path.join(__dirname, 'lib')
    return config
  },
}
