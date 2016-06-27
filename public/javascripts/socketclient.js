var socket = io();
socket.connect('http://localhost:3001');
socket.on('connect', function(data) {
    socket.emit('join', 'Hello World from client');
});