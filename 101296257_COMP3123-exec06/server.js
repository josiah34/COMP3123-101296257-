const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const noteRoutes = require('./routes/NoteRoutes')

const Server_PORT = 3030;

const DB_URL = "mongodb+srv://admin:projectsql123@cluster0.b16uair.mongodb.net/gbc_fullstack?retryWrites=true&w=majority"
const app = express();

app.use(express.json())
app.use(express.urlencoded())
// TODO - Update your mongoDB Atals Url here to Connect to the database
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.use("/api/", noteRoutes)


app.route("/")
.get( (req, res) => {
  res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
});


app.listen(Server_PORT, () => {
    console.log("Server is listening on port 3000");
});