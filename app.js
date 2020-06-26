const http = require('http');
const server = require('./server');

const PORT = 8080;
const HOST = '0.0.0.0';

const port = process.env.PORT || PORT;
const host = process.env.HOST || HOST;
http.createServer(server).listen(port, host, function () {
    // eslint-disable-next-line no-console
    console.log(`Sale System is running on port: ${port} at ${host}`);
});