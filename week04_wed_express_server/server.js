const express = require("express")

const SERVER_PORT = 8088

const app = express()

app.use(express.static("./statics"))

//http://localhost:8088/
app.get("/", (req, res) => {
    res.send("<h1>GET 1 - Welcome to NodeJs + Express Server")
    //res.send("<h1>GET 2 - Welcome to NodeJs + Express Server")
})

//http://localhost:8088/
app.post("/", (req, res) => {
    res.send("<h1>POST - Welcome to NodeJs + Express Server")
})

//http://localhost:8088/user
app.get("/user", (req, res) => {
    var user = {
        id: 1,
        first_name: "Pritesh",
        last_name: "Patel"
    }

    //res.send(user)
    res.setHeader("content-type", "application/json")
        .status(201)
        .send(JSON.stringify(user))
    //res.send(JSON.stringify(user))
})

//http://localhost:8088/student?id=1&firstname=Pritesh&lastname=Patel
app.get("/student", (req, res) => {
    res.send(JSON.stringify(req.query))
})


//Path Parameter
//http://localhost:8088/student/1/Pritesh/Patel
app.get("/student/:sid/:fnm/:lnm", (req, res) =>{
//(d[0-9]{5})
    const s = req.params

    var student_id = req.params.sid
    var first_name = s.fnm
    var last_name = s.lnm

    const newS = {
        student_id,
        first_name,
        last_name,
        full_name : `${first_name} ${last_name}`
    }

    res.json(newS)
    //res.send(JSON.stringify(req.params))
})

app.listen(SERVER_PORT, () => {
    console.log(`Server Started at http://localhost:${SERVER_PORT}/`)
})

//http://localhost:8088/student?id=1&firstname=Pritesh&lastname=Patel
//http://localhost:8088/student/1/Pritesh/Patel