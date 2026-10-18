use("CrudDb");   //Note we first have to use db to specify where we are working with


//  Create operation

db.createCollection("courses");

db.courses.insertOne({
    name: "Shehroz",
    price: 0,
    age: 17
});

db.courses.insertMany([
    {
        "name": "JavaScript Fundamentals",
        "price": 20000,
        "instructor": "Haris"
    },
    {
        "name": "Advanced Python",
        "price": 25000,
        "instructor": "Ahmed"
    },
    {
        "name": "React Hooks & Context",
        "price": 32000,
        "instructor": "Zainab"
    },
    {
        "name": "Node.js API Building",
        "price": 15000,
        "instructor": "Bilal"
    },
    {
        "name": "Figma UI/UX Masterclass",
        "price": 18000,
        "instructor": "Sara"
    },
    {
        "name": "Docker & Kubernetes",
        "price": 45000,
        "instructor": "Osman"
    },
    {
        "name": "Next.js Fullstack",
        "price": 28000,
        "instructor": "Haris"
    },
    {
        "name": "Ethical Hacking 101",
        "price": 50000,
        "instructor": "Hamza"
    },
    {
        "name": "Flutter Mobile Apps",
        "price": 27000,
        "instructor": "Aisha"
    },
    {
        "name": "Deep Learning Basics",
        "price": 60000,
        "instructor": "Ali"
    }
]);

//  Read Operation

//  if we want the only one then 
let b = db.courses.findOne({ price: 0 })
console.log(b);

let foundCollectionDocs = db.courses.find({ price: 15000 })
console.log(foundCollectionDocs);

console.log(foundCollectionDocs.count());
console.log(foundCollectionDocs.toArray());


//   update operation
db.courses.updateOne({ price: 0 }, { $set: { price: 100 } })
db.courses.updateMany({ price: 28000 }, { $set: { price: 35000 } })


//   Delete Operation
db.courses.deleteOne({ price: 100 })
let count = db.courses.countDocuments({ price: NumberInt(28000) });



db.courses.drop();   // to delete a database 