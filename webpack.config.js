const path = require( 'path' );
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );

module.exports = (env, options) => {
  if( options.mode === 'production' ) {
    config.plugins = [ new CleanWebpackPlugin() ];
  }
  return config;
};

const config = {
  mode: 'development',
  devtool: "source-map",

  entry: {
    app: [ './src/index.tsx' ],
  },

  resolve: {
    extensions: [ ".ts", ".tsx", '.js' ]
  },

  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      { test: /\.css$/i, use: [ 'style-loader', 'css-loader' ], },
    ]
  },

  output: {
    path: path.join( __dirname, 'dist' ),
    filename: 'app.js',
    publicPath: "dist/",
  },
};
