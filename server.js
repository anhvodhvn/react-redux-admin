const express = require('express');
const server = express();
const path = require('path');
const appInfo = require('./package.json');

server.use('/api/status', (req, res, next) => { 
    return res.send({ 
        success: true,
        message: 'welcome friend',
        version: appInfo.version 
    });
});

const dist = path.join(__dirname, './admin/dist');
server.use('/', express.static(dist, { index: 'index.html' }));

module.exports = server;