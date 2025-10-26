const sumHandler = (req, res) => {
    console.log(req.url, req.method);
    const body =[];
    req.on('data', chunk => body.push(chunk));
    req.on('end', () => {
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);
    console.log(bodyObj);
    const num1 = Number(bodyObj.num1);
    const num2 = Number(bodyObj.num2);
    const sum = num1 + num2;
    console.log(sum);
    res.setHeader('Content-Type', 'text/html');
    res.write(`<html>
        <head><title>Calculation Result</title></head>
        <body>
            <h1>Calculation Result</h1>
            <h2>The sum is ${sum}</h2>
        </body>
        </html>
        `)
    return  res.end();
    });
    
}

module.exports = sumHandler;