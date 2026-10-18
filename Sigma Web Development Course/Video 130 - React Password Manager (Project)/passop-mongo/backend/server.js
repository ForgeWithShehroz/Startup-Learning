const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require('cors')
const app = express();

app.use(cors());

const client = new MongoClient("mongodb://localhost:27017");
const dbName = "passop";
app.use(express.json());
let collection; // We'll assign this after connecting

async function getPasswords(req, res) {
    const data = await collection.find().toArray();
    res.json(data);
}

async function addPassword(req, res) {
    const result = await collection.insertOne(req.body);
    res.json(result);
}

/*
1. Destructuring Specific Fields
Instead of passing the entire req.body, you can extract exactly what you need. This prevents users from accidentally or maliciously injecting unwanted fields into your database.

// the code to post with the more enhancement


async function addPassword(req, res) {
    // Extract only the fields you expect
    const { site, username, password } = req.body;
    
    // Create a structured object to insert
    const newPasswordEntry = { site, username, password };

    const result = await collection.insertOne(newPasswordEntry);
    res.json(result);

    // we just passed req.body into newPasswordEntry and then inserted in this code in previous one inserted req.body directly
}
*/

async function deletePassword(req, res) {
    const result = await collection.deleteOne(req.body);
    res.json(result);
}

(async () => {
    await client.connect();

    const db = client.db(dbName);
    collection = db.collection("passwords");

    app.get("/", getPasswords);
    app.post("/", addPassword);
    app.delete("/", deletePassword);

    app.listen(5000, () => {
        console.log("Server started");
    });
})();