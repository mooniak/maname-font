var app = require('express')() //express server
var server = require('http').createServer(app) //http wrapper server
var io = require('socket.io').listen(server) //socket.io in charge
var open = require('open');
server.listen(8080)
open('http://localhost:8080/tester/');


// watch .js and .css files
watch = require('node-watch')
filter = function(pattern, fun){
  return function(filename){
    if(pattern.test(filename)){fun(filename);}
  }
}

watch('tester', function(filename) {
  io.sockets.emit('reload') //send a message to all clients
});

var serveIndex = require('serve-index')
var serveStatic = require('serve-static')

//set up express to serve static content
app.use(serveIndex("/"));

app.use(function(req, res, next) {
  // remove our cache spoofing
  var index = req.url.indexOf('?');
  if(index !== -1) {
      req.url = req.url.slice(0, index);
      req.originalUrl = req.originalUrl.slice(0, req.originalUrl.indexOf('?'));
  }
  next();
});


app.use(serveStatic(__dirname));
