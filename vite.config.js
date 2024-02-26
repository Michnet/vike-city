import vike from 'vike/plugin';
const path = require('path');
//import { defineConfig } from "vite"
//import ssr from "vike/plugin/"
import vercel from "vite-plugin-vercel"

export default {
  plugins: [vike({
     prerender: true,
     clientRouting: true
    }),
    //ssr(), 
    vercel()
  ],
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  },
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  server: {
    hot: true
  }
}
