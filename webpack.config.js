var path = require("path");
module.exports = {
  devtool: 'source-map',
  entry: {
    app: ["./src/main.js"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  resolve: {
    modules: ['./src/', 'node_modules'],
    mainFields: ['browser', 'main', 'jsnext:main', 'module'],
    alias: {
      'react': 'inferno-compat',
      'react-dom': 'inferno-compat'
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader",
          options: {
            presets: [['es2015', { 'modules': false } ], 'react'],
            plugins: ["transform-object-rest-spread"],
          },
        }],
      }
    ]
  },
};
