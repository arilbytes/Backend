const express = require('express') 
const app = express()

app.use(express.json())  //Middleware to use express - it gives power to read json raw data coming from postman

const notes = []

app.post('/notes', (req, res) => {
    console.log(req.body)
})

module.exports = app