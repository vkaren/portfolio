const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: ["./src/index.tsx"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[contenthash].js",
    publicPath: "/",
    assetModuleFilename: "assets/[name].[ext]",
    clean: true,
  },
  mode: "production",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".css", ".svg"],
    alias: {
      "@assets": path.resolve(__dirname, "src/assets/"),
      "@components": path.resolve(__dirname, "src/components/"),
      "@containers": path.resolve(__dirname, "src/containers/"),
      "@data": path.resolve(__dirname, "src/data/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.pdf$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "portfolio_Karen_Varela",
      favicon: path.resolve(__dirname, "public/favicon.png"),
      template: "./public/index.html",
      meta: {
        charset: "UTF-8",
        viewport: "width=device-width, initial-scale=1.0",
        description:
          "portfolio_Karen_Varela: Descubre mis proyectos, habilidades y experiencia.",
        keywords:
          "Karen Varela, Portfolio, Proyectos, Desarrollo, React, Web Development, PERN, Junior, Full Stack Developer, JavaScript",
        author: "Karen Varela",
        "og:title": "portfolio_Karen_Varela",
        "og:description":
          "Descubre mis proyectos, habilidades y experiencia en desarrollo web.",
        "og:type": "website",
        "og:url": "https://karenvarela.vercel.app",
        "og:image": {
          property: "og:image",
          content: "/assets/avatar.png",
        },
        "twitter:card": "summary_large_image",
        "twitter:title": "portfolio_Karen_Varela",
        "twitter:description":
          "Descubre mis proyectos, habilidades y experiencia en desarrollo web.",
        "twitter:image": {
          property: "twitter:image",
          content: "/assets/avatar.png",
        },
      },
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "public"),
          to: path.resolve(__dirname, "build/assets"),
        },
      ],
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: ["...", new CssMinimizerPlugin()],
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
};
