const sumHandler = require('./sum');

const requestHandler = (req, res) => {
    console.log(req.url, req.method);

    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`<html>
            <head><title>Calculator</title></head>
            <body>
                <h1>Welcome to the Calculator</h1>
                <a href="/calculator">Go to Calculator</a>
            </body>
            </html>
            `)
        return res.end();
    } else if (req.url === '/calculator' ) {
        res.setHeader('Content-Type', 'text/html');
        res.write(`<html>
            <head><title>Calculator</title></head>
            <body>
                <h1>Let's Calculator</h1>
                <form action="/calculate-result" method="POST">
                    <input type="number" name="num1" placeholder="First Number" required>
                    <input type="number" name="num2" placeholder="Second Number" required>
                    <button type="submit">Calculate</button>
                </form>
                <a href="/">Return to home</a>
            </body>
            </html>
            `)
        return res.end();
        } else if (req.url === '/calculate-result' && req.method === 'POST') {
            return sumHandler(req, res);
        }
        res.setHeader('Content-Type', 'text/html');
        res.write(`<html>
            <head><title>Calculator</title></head>
            <body>
                <h1>Page Not Found</h1>
                <a href="/">Go to Home Page</a>
            </body>
            </html>
            `)
        return res.end();

}

exports.requestHandler = requestHandler;