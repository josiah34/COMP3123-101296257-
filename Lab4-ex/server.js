const express = require('express')

const SERVER_PORT = 8080
const app = express()

app.get('/', (req, res) => {
    res.send("<h1>Get - Welcome to Node JS + Express Server</h1>")
})

app.post("/", (req, res) => {
res.send("<h1>Post - Welcome to Node JS + Express Server</h1>")
})


app.listen(SERVER_PORT,() =>{
    console.log(`Server is started at http://localhost:${SERVER_PORT}`)
})