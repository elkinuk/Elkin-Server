const withFonts = require('nextjs-fonts');

module.exports = withFonts({
  cssModules: true,
  webpack(config) {
    return config;
  },
});
