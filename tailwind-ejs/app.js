// external imports
const express = require('express');

// routers/local imports
const userRouter = require('./routes/userRoutes');
const {hostRouter} = require('./routes/hostRoutes');
const rootDir = require('./utils/pathUtils');

//core imports
const path = require('path');

const app = express();

app.set('view engine', 'ejs'); // takes which template engine using for rendering views here ejs is used
app.set('views', 'views'); // sets the folder name where all the view files are stored by default it is 'views' but we explicitly set it here for understanding purposes

// middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: true }));

// serve static assets (CSS, JS, images) from the public folder
app.use(express.static(path.join(rootDir, 'public')));

// using routers as middlewares
app.use(userRouter);
app.use("/host",hostRouter);



app.use((req, res, next) => {
   res.status(404).render('pageNotFound', { pageTitle: 'Page Not Found' });
   console.log(req.url, req.method)
})



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
