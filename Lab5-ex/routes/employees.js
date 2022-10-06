const express = require('express')
const routes = express.Router()

routes.get("/get", (req, res) => {
    res.send({message: "Get - Employees"})
})
routes.post("/add", (req, res) => {
    res.send({message: "Post - Employees"})
})

routes.delete("/remove", (req, res) => {
    res.send({message: "Delete Employee"})
})
routes.get("/getall", (req, res) => {
    res.send({message: "Get all Employees"})
})


module.exports = routes