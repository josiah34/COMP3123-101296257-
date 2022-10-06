const express = require('express')
const facultyRoutes = require('./routes/faculty')
const EmployeeRoutes = require('./routes/employees')
const fs = require('fs')
const app = express()
// app.use("/public", express.static(".static"))


//Middleware
app.use((req, res, next) => {
    // console.log(`Today : ${new Date()}`)
    const data = `${req.method}:${new Date()}:${req.url}`
    fs.appendFile("server.log", data, () => {
    })
    next()
})
const SERVER_PORT = 3001
app.listen(SERVER_PORT, () => {
    console.log(`Listening on port ${SERVER_PORT}`)}
    )

// efficient way to set routes/endpoints
// app.use("/faculty", facultyRoutes)
//app.use("/admin", facultyRoutes)
app.use("/api/v1/faculty", facultyRoutes)
app.use("/api/v1/employees", EmployeeRoutes)

app.route("/")
.get((req, res) => {
    res.send("Get - HOME")
})
.post((req, res) => {
    res.send("Post - HOME")
})
.put((req, res) => {
    res.send("Put - HOME")
})
.patch((req, res) => {
    res.send("Patch - HOME")
})
.delete((req, res) => {
    res.send("Delete - HOME")
})