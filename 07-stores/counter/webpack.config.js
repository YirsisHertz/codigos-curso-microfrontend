const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = (_, argv) => ({
  output: {
    publicPath: "http://localhost:8082/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8082,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "counter",
      filename: "remoteEntry.js",
      remotes: {
        store: "store@http://localhost:5050/remoteEntry.js",
      },
      exposes: {
        "./Counter": "./src/components/Counter.jsx",
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: "^18.2.0",
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "^18.2.0",
        },
        sweetalert2: {
          singleton: true,
          requiredVersion: "^11.7.3",
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
});
