const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // handle redirect before writing anything
    if (req.url === "/calculate-result" && req.method === "POST") {
        const body = [];
        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', ()=>{
            const fullBody = Buffer.concat(body).toString();
            console.log(fullBody);
            const params = new URLSearchParams(fullBody);
            const bodyObject = Object.fromEntries(params);
            console.log(bodyObject);
            fs.writeFileSync('numbers.txt', JSON.stringify(bodyObject));

            // redirect to /calculate-result page with get method by default sets on 302 status code

            // IMP = each time for redirect or any path its go through the create server callback function top to bottom looking for exact response and if found then execute it

            res.writeHead(302, { Location: '/calculate-result' }); // its just set the headers for redirection
            res.end(); // this actually sends the response
            // end the response here to avoid further processing

            return; // to prevent further execution of the code below after redirection
        })
        return; // to prevent further execution of the code below until data is fully received
    }


    // now safe to start writing response
    if (req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Req and Res Tutorial</title></head>')
    res.write('<body>');
    res.write('<nav><ul><li><a href="/">Home</a></li><li><a href="/calculator">Calculate</a></li></ul></nav>');

    if (req.url === '/') {
        res.write('<h1>Welcome to Home Page</h1>');
    } else if (req.url === '/calculator') {
        res.write('<h1>Welcome to Calculator Page</h1>');
        res.write('<form action="/calculate-result" method="POST">');
        res.write('<input type="number" name="num1" placeholder="Enter First Number"/> <br/>');
        res.write('<input type="number" name="num2" placeholder="Enter Second Number"/> <br/>');
        res.write('<button type="submit">Calculate Sum</button>');
        res.write('</form>');
    } else if (req.url === '/calculate-result') {
        const sumFromFile = require('./sum');
        const result = sumFromFile();
        res.write(`<h1>The Sum is: ${result}</h1>`);    
    } 

    res.write('</body>');
    res.write('</html>');
    res.end();
}
});





const PORT = 3000
server.listen(PORT, ()=>{
    console.log(`Server running on address http://localhost:${PORT}`);
})
