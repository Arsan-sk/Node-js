const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url)
});

const PORT = 3000
server.listen(PORT, ()=>{
    console.log(`Server running on address http://localhost:${PORT}`);
})
