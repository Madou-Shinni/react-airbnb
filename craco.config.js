const cracoLessPlugin = require("craco-less");
const path = require('path');
const resolve = (pathName) => path.resolve(__dirname,pathName)

module.exports = {
  // ts
  typescript: {
    enableTypeChecking: true /* (default value) */,
  },
  // less
  plugins: [
    {
      plugin: cracoLessPlugin,
    }
  ],
  // webpack
  webpack: {
    alias: {
      "@": resolve("src"),
      "components": resolve("src/components"),
      "utils": resolve("src/utils"),
    }
  }
}