const { environment } = require('@rails/webpacker')
const bsLoader = require('./loaders/bucklescript')

environment.loaders.append('bs', bsLoader);
module.exports = environment
