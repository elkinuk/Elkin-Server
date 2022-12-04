const withFonts = require('nextjs-fonts');

export default withFonts({cssModules: true,
  webpack(config) {
    return config;
  },});
