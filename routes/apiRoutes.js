//GET the Router
const app = require('express').Router();
const dataBase = require('../db/store')
app.get('/notes', (req, res) => {
    dataBase.getNotes()
        .then((note) => {
            //grabs the class of store and turn them into json
            res.json(note)
        })
});
app.post('/notes', (req, res) => {
    dataBase.addNote(req.body)
        // Destructuring assignment for the items in req.body
    .then((note)=>{
        res.json(note)
    })

})//Always a different paramater, a changing variable
app.delete('/notes/:id',(req, res) => {
    dataBase.removeNote(req.params.id)//responds with the note, 
    //deletes the note
    .then((note)=>{
        res.json(note)
    })
})
module.exports = app;