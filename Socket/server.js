var port = 8001;

var express  = require('express');
var socketio = require('socket.io');
var http     = require('http');

var app    = express();
var server = http.Server(app);
var io     = socketio( server );

server.listen(port);
console.log("Go to http://localhost:"+port);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  socket.emit('handshake0', { hello: 'acknowledge from server' });
  socket.on('handshake1', function (data) {
    console.log(data);
  });
});

setInterval(function(){ 
    io.emit('time', { ts: (new Date()).getTime() });
}, 2000);
