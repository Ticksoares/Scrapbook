const path = require("path");

module.exports = {
  // quer exportar o código desse objeto
  entry: path.resolve(__dirname, "src", "index.js"), // dirname é a pasta que estamos, o resto é o caminho que vai iniciar o programa
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.js$/, // $ diz que pode ser qualquer arquivo .js -- o ponto indica que é qualquer string
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
