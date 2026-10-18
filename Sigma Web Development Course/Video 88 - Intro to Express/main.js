const express = require("express")
const app = express() // we said that we initiliaze an app for express
const port = 3000

// app.get or app.post or app.delete or app.put(path, handler)
app.get('/', (req, res)=>{
    res.send("Hello World2")
})
app.get('/about', (req, res)=>{
    res.send("Hello About ")
})

// Passing parameters and giving args using url and 
app.get('/params/:slug/:two', (req, res)=>{
    res.send(`Params are ${req.params.slug} and ${req.params.two}`)
    console.log(res);
    console.log(res.params);
    console.log(res.query);
    
    
})

app.listen(port, ()=>{
    console.log(`Example app listening at ${port}`);
    
})

/* Made the server locally */

// const http = require("node:http")

// const hostname = '127.0.0.1'
// const port = 3000

// const server = http.createServer((req, res)=>{
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/html");
//     res.end("Hello World\n")
// });
// server.listen(port, hostname, ()=>{
//     console.log(`Server running at http://${hostname}:${port}/`);
    
// })