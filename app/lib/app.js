var router = require('./router');
var Server = require('./server');

var server = new Server(router);

server.start();

module.exports = server;