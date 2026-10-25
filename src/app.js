const express = require('express') 
const app = express()

app.use(express.json())  //Middleware to use express - it gives power to read json raw data coming from postman

const notes = []

// POST METHOD - FRONTEND SE SERVER KA SAFAR /notes
app.post('/notes', (req, res) => {
    
    notes.push(req.body) //request aayi postman/frontend se or notes array mein push hogyi
    
    res.status(201).json({
        message: "note created successfully"
    })
})

// GET METHOD - SERVER SE FRONTEND KA SAFAR /notes
app.get('/notes', (req, res) => {
    res.status(200).json({
        message:"notes fetched successfully",
        notes: notes
    })

// DELETE METHOD USING INDEX - /notes:index -> : ke baad wala dynamic value represent krta hai
app.delete('/notes/:index', (req, res) => {

    const index = req.params.index  // could be any index

    delete notes[index]

    res.status(200).json({
        message: "notes deleted successfully"
    })
})
})

module.exports = app