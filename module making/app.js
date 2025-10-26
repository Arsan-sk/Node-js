const http = require('http');
const requestHandler = require('./user');  // importing the function exported from user.js , can give any name instead of userRequestHandler

const server = http.createServer(requestHandler);

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
