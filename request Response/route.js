const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers) // instead of printing whole req we just log these
    // res.setHeader('Content-Tyoe', 'json') etc tec headers set for browser to let know
    res.setHeader('Content-Tyoe', 'text/html') // headers set only once and if res.end call we can call header after that again it will kill server with error for that instead return res.end()
    res.write('<html>')
    res.write('<head><title>Req and Res Tutorial</title></head>')
    res.write('<body>')

    if(req.url === '/'){
        res.write('<h1>Welcome to Home Page</h1>')
    } else if (req.url === "/about") {
        res.write('<h1>This is Aboute Page</h1>')
    }

    res.write('<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, at? Blanditiis cumque debitis illum voluptate velit. Magni voluptate ad consequuntur ipsum delectus maiores reprehenderit mollitia.</p>')
    res.write('</body>')
    res.write('</html>')
    res.end()
})

const PORT = 3000
server.listen(PORT, ()=>{
    console.log(`Server running on address http://localhost:${PORT}`);
})
