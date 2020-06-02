const express = require('express');
const server = express();

const path = require('path');
const dist = path.join(__dirname, 'dist');

server.get('/status', (req, res) => { res.send('Hello: ReactJs + NodeJs on Azure'); });
server.use('/', express.static(dist, { index: 'index.html' }));

module.exports = server;