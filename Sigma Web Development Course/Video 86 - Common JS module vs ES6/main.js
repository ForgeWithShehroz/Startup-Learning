// const http = require('node:http');  // if we are using type = commonjs in package.json we can't import/use module like this we hav to do this insetead
import http import "http"

const hostname = '127.0.0.1'
const port = 3000
const server = http.creatServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader = ('Content-Type', 'text/plain');
    res.end("Hello World\n");
    // res.setHeader = ('Content-Type', 'html');
    // res.end("<h1>Hello World\n</h1>")
});

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`)
});