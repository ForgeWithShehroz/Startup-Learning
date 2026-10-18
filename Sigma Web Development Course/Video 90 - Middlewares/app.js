const express = require('express');
const app = express();
const port = 3005;

// app.use((req, res, next) => {
//     console.log('Time:', Date.now());
//     next();
// });

app.get('/', (req, res) => {
    console.log("HElloo world");
    
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

