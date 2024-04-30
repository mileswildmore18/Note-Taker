//GET the Router
const app = require('express').Router();
const dataBase = require('../db/store')
app.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});
module.exports = app;