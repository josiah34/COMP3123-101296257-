const express = require('express')

const SERVER_PORT = 8082
const app = express()

app.get('/', (req, res) => {
    res.send("<h1>Get - Welcome to Node JS + Express Server</h1>")
    //res.send("<h1>Get - Welcome to Node JS + Express Server</h1>")
})

app.get('/user', (req, res) => {
 var user ={
        id: 1,
        first_name: "John",
        last_name: "Doe",
 }
 //res.send(user)
 res.setHeader("Content-Type", "application/json")
  .status(200)
  .send(JSON.stringify(user))
})
app.post("/", (req, res) => {
res.send("<h1>Post - Welcome to Node JS + Express Server</h1>")
})
//http//localhost:8082/student/1/John/Doe     Path Parameter
app.get("/student/:sid/:fnm/:lnm", (req, res) => {
    res.send(JSON.stringify(req.params))
})
app.listen(SERVER_PORT,() =>{
    console.log(`Server is started at http://localhost:${SERVER_PORT}`)
})
// Query String
//http//localhost:8082/user?id=1&first_name=John&last_name=Doe
//
//Path Parameter
//http//localhost:8082/user/1/John/Doe
