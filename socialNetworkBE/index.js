const http = require('http');

const {app} = require('./app');
const {configs: {PORT}} = require('./configs');

const server = http.createServer(app);

server.listen(PORT, () => console.log(`Listening ${PORT}`));

process.on('SIGTERM', () => server.close(() => process.exit(0)))
process.on("uncaughtException", error => console.log(error));
process.on("unhandledRejection", error => console.log(error));
