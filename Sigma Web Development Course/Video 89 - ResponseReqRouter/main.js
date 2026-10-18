const express = require("express")
const blog = require("./routes/blog")


const app = express() 
const port = 3000

app.use(express.static("public"))
app.use('blog', blog)

app.get('/', (req, res)=>{
    res.send("Hello get request")
})

app.post('/', (req, res)=>{
    console.log("Hey its a post request")
    res.send("Hello Post request ")
})

app.get('/index', (req, res)=>{
    res.sendFile("templates/index.html", {root:__dirname})
})

app.get('/api', (req, res)=>{
    res.json({a:1, name:['name1', 'name2']})
})

app.listen(port, ()=>{
    console.log(`Example app listening at ${port}`);
    
})
