//GET the Router
const app = require('express').Router();
const dataBase = require('../db/store')
app.get('/notes', (req, res) => {
    dataBase.getNotes()
    .then((note)=>{
        //grabs the class of store and turn them into json
        res.json(note)
    })
});
module.exports = app;