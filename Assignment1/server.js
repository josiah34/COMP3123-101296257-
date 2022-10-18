const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// set route variables
const employeeRoutes = require('./routes/EmployeeRoutes')
const userRoutes = require('./routes/UserRoutes')

const Server_PORT = 3030;

//mongodb connection string
const DB_URL = "mongodb+srv://admin:projectsql123@cluster0.b16uair.mongodb.net/gbc_fullstack?retryWrites=true&w=majority"
const app = express()
const jwt = require('jsonwebtoken')

app.use(express.json())
app.use(express.urlencoded())
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

//configure routes
app.use("/api/emp/", employeeRoutes)
app.use("/api/user/", userRoutes)


app.route("/")
.get( (req, res) => {
  res.send("<h1>Welcome to Assignment 1-Josiah Galloway(101296257)</h1>");
});


app.listen(Server_PORT, () => {
    console.log("Server is listening on port " + Server_PORT);
});