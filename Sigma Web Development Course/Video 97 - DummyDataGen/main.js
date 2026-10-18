import mongoose from "mongoose";
import express from "express";
import { Data } from "./models/dummyGen.mongodb.js";
import path from "path";

let connection = await mongoose.connect('mongodb://127.0.0.1:27017/Company');

const app = express()
const port = 3000

const pick = arr => arr[Math.floor(Math.random() * arr.length)];
Object.defineProperties(globalThis, {
    name: { get: () => pick(['Alice', 'Bob', 'Charlie', 'Diana']) },
    salary: { get: () => Math.floor(Math.random() * 5000) + 3000 },
    language: { get: () => pick(['JavaScript', 'Python', 'Go', 'Ruby']) },
    city: { get: () => pick(['New York', 'London', 'Tokyo', 'Paris']) },
    isManager: { get: () => Math.random() < 0.5 }
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve("./templates/index.html"));
});

// Route 2: The API endpoint that handles the database logic
app.post('/generate', async (req, res) => {
    try {
        const count = await Data.countDocuments({});
        let statusMessage = "";
        
        if (count > 0) {
            await Data.deleteMany({});
            statusMessage = "Old data cleared. ";
        }

        const dummyData = new Data({ name, salary, language, city, isManager });
        await dummyData.save();

        statusMessage += "New random employee added successfully!";
        res.json({ message: statusMessage });

    } catch (error) {
        res.status(500).json({ error: "Database operation failed" });
    }
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// https://www.npmjs.com/package/mongodb


