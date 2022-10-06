const express = require('express')
const SERVER_PORT = 3001
const app = express()
app.listen(SERVER_PORT, () => {
    console.log(`Listening on port ${SERVER_PORT}`)}
    )


app.get("/hello", (req, res) => {
    res.send("<h1>Hello Express JS</h1>")
})
app.get("/user", (req, res) => {
    res.send(JSON.stringify(req.query))
})


app.post("/user/:fnm/:lnm", (req, res) =>{
        const s = req.params
        var firstname = s.fnm
        var lastname = s.lnm
    
        const person = {
            firstname,
            lastname

        }
    
        res.json(person)
    })