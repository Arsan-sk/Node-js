const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    // handle redirect before writing anything
    // if (req.url === "/userinput" && req.method === "POST") {
    //     fs.eSync('UserDetails.txt', 'Shaikh Mohd Arsan');
    //     res.statusCode = 302;
    //     res.setHeader('Location', '/');
    //     return res.end();
    // }

    // now safe to start writing response
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Working NavBar</title></head>');
    res.write('<body>');
    res.write('<nav>');
    res.write('<ul>');
    res.write('<li><a href="/">Home</a></li>');
    res.write('<li><a href="/about">About</a></li>');
    res.write('<li><a href="/contact">Contact</a></li>');
    res.write('</ul>');
    res.write('</nav>');

    if (req.url === '/') {
        res.write('<h1>Welcome to Home Page</h1>');
    } else if (req.url === '/about') {
        res.write('<h1>This is mine About Page</h1>');
    } else if (req.url === '/contact') {
        res.write('<h1>Welcome to mine Contact Page</h1>');
    }

    // res.write('<h1>All The Best For Learning Node js</h1>');
    res.write('<footer><p>&copy; 2024 My Website</p></footer>');
    res.write('</body>');
    res.write('</html>');
    res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
