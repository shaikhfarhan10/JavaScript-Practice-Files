use("crudDB")
db.createCollection("Courses")
// db.Courses.insertOne({

//     name:"Farhan's Course",
//     price: 10000000,
//     assignment: 10,
//     projects: 91
// })

// db.Courses.insertMany([
//     {
//       "name": "Python Masterclass",
//       "price": 0,
//       "assignments": 10,
//       "projects": 30
//     },
//     {
//       "name": "JavaScript Basics",
//       "price": 0,
//       "assignments": 8,
//       "projects": 20
//     },
//     {
//       "name": "C# for Beginners",
//       "price": 0,
//       "assignments": 15,
//       "projects": 40
//     },
//     {
//       "name": "Web Development Fundamentals",
//       "price": 0,
//       "assignments": 12,
//       "projects": 35
//     },
//     {
//       "name": "Java Programming Essentials",
//       "price": 0,
//       "assignments": 14,
//       "projects": 38
//     },
//     {
//       "name": "ReactJS Crash Course",
//       "price": 0,
//       "assignments": 10,
//       "projects": 25
//     },
//     {
//       "name": "SQL Simplified",
//       "price": 0,
//       "assignments": 12,
//       "projects": 30
//     },
//     {
//       "name": "Responsive Web Design",
//       "price": 0,
//       "assignments": 10,
//       "projects": 28
//     },
//     {
//       "name": "Node.js for Beginners",
//       "price": 0,
//       "assignments": 13,
//       "projects": 36
//     },
//     {
//       "name": "Frontend Development with Vue.js",
//       "price": 0,
//       "assignments": 11,
//       "projects": 32
//     }
//   ]
// )

// For Finding Something with value
let a = db.Courses.find({ price: 0 })
console.log(a);

// For getting the Count how many Objects are there in the DB
console.log(a.count());

// For Finding One with the Price
let b = db.Courses.findOne({ price: 0 })
console.log(b);

// For Updating One
db.Courses.updateOne({ price: 0 }, { $set: { price: 1000 } })

// For Updating Many
db.Courses.updateMany({ price: 0 }, { $set: { price: 1000 } })

// For Deleting One
db.Courses.deleteOne({ price: 1000 })

// For Deleting Many
db.Courses.deleteMany({ price: 1000 })
