const express = require('express');
const app = express();
const port = 3005;

// app.use((req, res, next) => {
//     console.log('Time:', Date.now());
//     next();
// });

// app.get('/', (req, res) => {
//     res.sendFile("./templates/index.html", {root: __dirname})
// });   // instead of using this we'll use this for different purposes like sending data

app.set("view engine", "ejs")


app.get("/", (req, res) => {
    let setName = "Shehroz"
    let age = 17
    res.render("index", { setName: setName, age: age })
    // as templates folder changes to views , as well as index.html changes to index.ejs and used as index name only
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

