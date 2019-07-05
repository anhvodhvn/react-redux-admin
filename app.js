const express = require('express');
const http = require('http');
const path = require("path");

const server = express();
server.set('port', process.env.PORT || 8080);

const webpath = path.join(__dirname, 'dist');
server.use('/', express.static(webpath, { index: 'index.html' }));
server.get('*', function (req, res) {
    res.sendFile(path.join(webpath, 'index.html'));
});

http.createServer(server).listen(server.get('port'), function () {
    console.log('Material Design UI is running on port:' + server.get('port'));
});