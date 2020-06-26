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

server.use('/', express.static(path.join(__dirname, 'admin/dist'), { index: 'index.html' }));
app.get(['/', '/*'], function(req, res) {
    res.sendFile(path.join(__dirname, 'admin/dist', 'index.html'));
  });

module.exports = server;