/**
Client Listener
*/
var net = require('net'),
    JsonSocket = require('../lib/json-socket');
var port3 = 9840; //The same port1 that the server is listening on
var host = '127.0.0.1';
var socket = new JsonSocket(new net.Socket()); //Decorate a standard net.Socket with JsonSocket
socket.connect(port3, host);
socket.on('connect', function() { //Don't send until we're connected
    socket.sendMessage({command: 'start', beginAt: 10});
    socket.on('message', function(square) {
        console.log(square);
        if (square > 200) {
            socket.sendMessage({command: 'stop'});
        }
    });
});
