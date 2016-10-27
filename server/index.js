require('babel-register');
require('app-module-path').addPath(require('path').join(__dirname, '../server'));
require('./app.js');
