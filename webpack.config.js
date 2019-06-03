// module.exports = {
//   entry: './src/app.js',
//   mode: 'development',
//   output: {
//     filename: './app.bundle.js'
//   }
// }

var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.join(__dirname, 'dist');
var APP_DIR = path.join(__dirname, 'src');

var config = {
	entry: APP_DIR + '/app.js',
	mode: 'development',
	output: {
		path: BUILD_DIR,
		filename: 'app.bundle.js'
	}
}

module.exports = config;
