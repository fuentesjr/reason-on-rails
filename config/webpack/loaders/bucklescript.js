module.exports = {
  test: /\.(re|ml)$/,
  use: [{
    loader: 'bs-loader',
    options: {
			module: 'es6', 
			inSource: true
		}
  }]
}
