const express = require('express');
const app = express();
const path = require('path');
const nunjucks = require('nunjucks');
const routes = require('./routes');

app.use('/', routes)

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true});

app.listen(3000, () => console.log("Listening at port 3000..."))

app.use(function(req, res, next) {
    console.log(req.method, req.path);
    next();
})
