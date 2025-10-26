// core module

// external module
const express = require('express');

// local module
// const requestHandler = require('./user');  // importing the function exported from user.js , can give any name instead of userRequestHandler

const app = express();

// app.use((req, res, next) => {
//     console.log("it's a first middleware", req.url, req.method);
//     next(); // if dont pass so it will not go to next middleware or route handler and wait for response here only
// });

// app.use((req, res, next) => {
//     console.log("it's a second middleware", req.url, req.method);
//     // With express we dont need to specify headers and end response manually as its handled by express internally
//     // also instead of res.write() we can use res.send() to send response that's gonna handle ending response too
//     res.send('<h1>Hello from Express js server!</h1>');
// })


// app.(method, callback->(req, res, next))  -> to handle specific http method requests
// order matters
// can not call next() after sending response
// this path "/" work for all like if there any not found route after this then also this will be executed



app.use("/userinput",(req, res, next) => {  // only for /userinput path
    console.log("it's a second middleware", req.url, req.method);
    res.send('<h1>Hello Its Second Middleware</h1>');
});
// when the below code were above what issue i face is it always matched first as "/" is part of every path so the below middleware never got executed
app.use("/",(req, res, next) => {
    console.log("it's a first middleware", req.url, req.method);
    // res.send("<h1>Hello It's  First Middleware</h1>");
    next(); // only pass to the one with no pathor this "/" path
});

// only goes here if there is next called in above middleware other wise its only shows first middleware response of "/" path 
app.use("/",(req, res, next) => {
    console.log("it's a Another middleware", req.url, req.method);
    res.send("<h1>Hello It's  Another Middleware</h1>");
    // next(); // only pass to the one with no pathor this "/" path
});






//PREVIOUS WAY WITHOUT EXPRESS
// const server = http.createServer(app);

// const PORT = 3000;
// server.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });

// Now we dont need to make server using http module as express does it internally we can directly litsen to app 

// USING EXPRESS LISTEN  SERVER METHOD

const PORT = 3000   ;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
