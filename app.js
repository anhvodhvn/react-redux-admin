const http = require('http');
const server = require('./server');

const port = process.env.PORT || 8080;
http.createServer(server).listen(port, function () {
    // eslint-disable-next-line no-console
    console.log('Material Design UI is running on port:' + port);
});