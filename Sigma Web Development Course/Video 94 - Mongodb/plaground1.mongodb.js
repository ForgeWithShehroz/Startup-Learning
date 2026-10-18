/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('sigmaDatabase');

// Insert a few documents into the sales collection.
db.getCollection('courses').insertMany([[
    {
        "name": "JavaScript",
        "price": "NumberInt('20000')",
        "instructor": "Haris"
    },
    {
        "name": "Python Data Science",
        "price": "NumberInt('25000')",
        "instructor": "Ahmed"
    },
    {
        "name": "React Native",
        "price": "NumberInt('30000')",
        "instructor": "Zainab"
    },
    {
        "name": "Node.js Backend",
        "price": "NumberInt('22000')",
        "instructor": "Bilal"
    },
    {
        "name": "UI/UX Design",
        "price": "NumberInt('18000')",
        "instructor": "Sara"
    },
    {
        "name": "DevOps Essentials",
        "price": "NumberInt('35000')",
        "instructor": "Osman"
    },
    {
        "name": "Next.js Advanced",
        "price": "NumberInt('28000')",
        "instructor": "Haris"
    },
    {
        "name": "Cyber Security",
        "price": "NumberInt('40000')",
        "instructor": "Hamza"
    },
    {
        "name": "Flutter Development",
        "price": "NumberInt('27000')",
        "instructor": "Aisha"
    },
    {
        "name": "Machine Learning",
        "price": "NumberInt('45000')",
        "instructor": "Ali"
    }
]
]);


// Print a message to the output window.
console.log("Data is inserted");
