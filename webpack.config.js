var webpack = require('webpack');
module.exports = {
  entry:  {
	    App: './src/app.js',
	    App2: './src/app2.js',
	    App3: './src/app3.js',
	    App4: './src/app4.js',
	    App5: './src/app5.js',
	    App6: './src/app6.js',
	    App7: './src/app7.js',
	    Global: './src/Global.js',
  },
  output: {
      path: __dirname + '/build',
      filename: "[name].js"
  },
  module: {
      rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
              plugins: ['transform-runtime'],
              presets: ['es2015', 'react', 'stage-2']
          }
      }, {
          test: /\.css$/,
          loader: "style-loader!css-loader"
      }]
  }
};
