const http = require('http');
// function requestLitsner(req, res){
//     console.log(req);
// }
// http.createServer(requestLitsner) justserver created if run it instantly get off as its not litsening hence we make it litsen on any port so if any thing happen at that perticular port like request comes or something it litsen and process
// OR
// http.createServer(function(req, res){
//     console.log(req);
// })
// OR

const server = http.createServer((req, res) => {
    // console.log(req);
    console.log(req.url, req.method, req.headers) // instead of printing whole req we just log these
    // process.exit(); // it use to stop server where here we RE STOPING IT AS SOON AS FIRST REQUEST COMES IN
})

// server.listen(3000) // it also take callback function which run when server run successfully below is example function that we dont call but litsen will when success is achived on litsening
const PORT = 3000
server.listen(PORT, ()=>{
    console.log(`Server running on address http://localhost:${PORT}`);
})

