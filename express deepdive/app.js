const express = require('express');
// body-parser is a library that provide a midle ware we just need to use to body parse while the all that chunk data parsing and objectmaking doney that midleware it self we just need to use it. previosly it werea seoparate library but now it is included in express itself
const bodyParser = require('body-parser');

const app = express();

app.use("/sample", (req, res, next) => {
    console.log("This is a sample middleware", req.url, req.method);
    next();
});

app.use("/dummy", (req, res, next) => {
    console.log("This is a dummy middleware", req.url, req.method);
    next();
});

app.use("/about", (req, res, next) => {
    console.log("This is a about middleware", req.url);
    res.send(`<h1>This is the About Page</h1>
        <p>Welcome to the about page of our Express application.</p>
        <a href="/">Go Back to Home</a>x`);
});

app.get("/contact-us", (req, res, next) => {
    console.log("This is a contact us GET middleware", req.url);
    res.send(`<h1>Contact Us</h1>
        <p>If you have any questions, feel free to reach out to us at just fill the below form and we will get back to you as soon as possible.</p>
        <form action="/contact-us" method="POST">
        <label for="name">Name:</label><br>
        <input type="text" name="name" placeholder="Your Name" id="name" required><br><br>
        <label for="email">Email:</label><br>
        <input type="email" name="email" placeholder="Your Email" id ="email" required><br><br>
        <label for="message">Message:</label><br>
        <textarea name="message" placeholder="Your Message" id="message" required></textarea><br><br>
        <input type="submit" value="Submit">
        </form><br>
        <a href="/">Go Back to Home</a>`);
});

app.post("/contact-us", (req, res, next) => {
    console.log("First handling", req.url, req.body);
    next();
});

app.use(bodyParser.urlencoded()); // instead of making one midleware fpr[arsing we can use this body parser midleware to parse all the incoming form data

app.post("/contact-us", (req, res, next) => {
    console.log("Handling", req.url, req.body);
    res.send(`<h1>Thank You for Contacting Us!</h1>
        <p>We have received your message and will get back to you shortly.</p>
        <a href="/">Go Back to Home</a>`);
});

app.get("/", (req, res, next) => {  // used app.get to avoid conflict with other middlewares
    console.log("This is a home middleware handles all paths", req.url);
    res.send(`<nav>
    <a href="/">Home</a> |
    <a href="/about">About</a> |
    <a href="/contact-us">Contact Us</a> |
    <a href="/sample">Sample</a> |
    <a href="/dummy">Dummy</a>  
        </nav>
        <h1>Welcome to the Home Page</h1>
        <p>This is the home page of our Express application. You can explore various routes from here.</p>`
    )});





const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})