const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers) // instead of printing whole req we just log these
    // res.setHeader('Content-Tyoe', 'json') etc tec headers set for browser to let know
    res.setHeader('Content-Tyoe', 'text/html')
    res.write('<html>')
    res.write('<head><title>Req and Res Tutorial</title></head>')
    res.write('<body><h1>Learning Node js Request and Response workings</h1></body>')
    res.write('</html>')
    res.end()
})

const PORT = 3000
server.listen(PORT, ()=>{
    console.log(`Server running on address http://localhost:${PORT}`);
})
