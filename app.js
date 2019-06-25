const express = require('express');
const http = require('http');
const path = require("path");

const server = express();
server.set('port', process.env.PORT || 8080);

server.use(express.static('dist'));
server.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

http.createServer(server).listen(server.get('port'), function () {
    console.log('Material Design UI is running on port:' + server.get('port'));
});