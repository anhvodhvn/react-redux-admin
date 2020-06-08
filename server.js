const express = require('express');
const server = express();
const appInfo = require('./package.json');

server.get('/status', (req, res) => { res.send({ 
    success: true, 
    version: appInfo.version 
}); });

const path = require('path');
const dist = path.join(__dirname, './admin/dist');
server.use('/', express.static(dist, { index: 'index.html' }));

module.exports = server;