//gathers info from the node module
const app = require('express').Router();
const path = require('path');
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/notes.html'))
);
module.exports = app;