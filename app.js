const express = require('express');
const path = require('path');

const app = express();

app.listen(3000, () => console.log('twitter!'))

app.use('/', function(req, res, next) {
    console.log(req.method, req.path)
    next();
})

app.get('/', (req, res) => {
    res.send('Welcome to twitter\n')
})

app.get('/hi', (req, res) => {
    res.send('hello!\n')
})