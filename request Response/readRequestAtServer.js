const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // handle redirect before writing anything
    if (req.url === "/userinput" && req.method === "POST") {
        const body = []; // its const & we will not change whole array but push data in it
        req.on('data', chunk => { 
            console.log(chunk);
            body.push(chunk);
        })
        req.on('end', () =>{
            const fullBody = Buffer.concat(body).toString();
            console.log(fullBody); // username=arsan&email=arsan%40gmail.com&gender i.e encrypted kindof we need to parse
        })
        // fs.writeFileSync('UserDetails.txt', 'Shaikh Mohd Arsan');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }

    // now safe to start writing response
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Req and Res Tutorial</title></head>');
    res.write('<body>');

    if (req.url === '/') {
        res.write('<h1>Enter The Details:</h1>');
        res.write('<form action="/userinput" method="POST">');
        res.write('<input type="text" name="username" placeholder="Enter Your Name"/> <br/>');
        res.write('<input type="email" name="email" placeholder="Enter Your Email"/> <br/>');
        res.write('<label for="gender">Select Your Gender:</label><br/>');
        res.write('<input type="radio" id="gender" name="gender" value="male"> Male<br/>');
        res.write('<input type="radio" id="gender" name="gender" value="female"> Female<br/>');
        res.write('<button type="submit">Submit</button>');
        res.write('</form>');
    }

    res.write('<h1>All The Best For Learning Node js</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
