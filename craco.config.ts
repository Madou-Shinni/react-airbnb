const path = require("path")
const cracoLessPlugin = require("craco-less")

const resolve = (pathname:any) => path.resolve(__dirname,pathname)

export default module.exports = {
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