
const withFonts = require('nextjs-fonts');

module.exports = withFonts({
  cssModules: true,
  webpack(config, options) {
    return config;
  }
});
