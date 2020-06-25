// module.exports = { experimental: { scss: true } };
const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
  },
  experimental: { scss: true },
});
