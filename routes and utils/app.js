// external imports
const express = require('express');

// routers/local imports
const userRouter = require('./routes/userRoutes');
const hostRouter = require('./routes/hostRoutes');
const rootDir = require('./utils/pathUtils');

//core imports
const path = require('path');

const app = express();

// middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: true }));

// using routers as middlewares
app.use(userRouter);
app.use("/host",hostRouter);



app.use((req, res, next) => {
   res.status(404).sendFile(path.join(rootDir, 'views', 'pageNotFound.html'));
   console.log(req.url, req.method)
})



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
