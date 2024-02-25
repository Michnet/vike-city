import vike from 'vike/plugin';
const path = require('path');

export default {
  plugins: [vike({ prerender: true})],
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  server: {
    hot: true
  }
}