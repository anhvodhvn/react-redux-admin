const express = require('express');
const server = express();
const http = require('http');
const path = require("path");

const dist = path.join(__dirname, 'dist');
server.get('/status', (req, res) => { res.send('Hello: ReactJs + NodeJs on Azure'); });
server.use('/', express.static(dist, { index: 'index.html' }));

const port = process.env.PORT || 80;
http.createServer(server).listen(port, function () {
    console.log('Material Design UI is running on port:' + port);
});