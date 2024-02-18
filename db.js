const mongoose = require("mongoose");
require("dotenv").config();


// define the mongodb onnection URL
// const mongoURL = 'mongodb://127.0.0.1:27017/helloWorld' 
const mongoURL = process.env.DB_URL; 

// setup MONGODB connection
mongoose.connect(mongoURL,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}) 


// get the dafault connection 
const db = mongoose.connection;


// define even listeners for database connections
db.on('connected', () => {
  console.log("connected to MongoDB server");
})
db.on('disconnected', () => {
  console.log("disconnected to MongoDB server");
})
db.on('error', (err) => {
  console.log("MongoDB connection error: " , err);
})


// export the database connection
module.exports = db;