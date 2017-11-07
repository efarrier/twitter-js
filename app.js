const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks');
const app = express();

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true});

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

nunjucks.render('index.html', locals, function (err, output) {
    // console.log(output);
});

app.listen(3000, () => console.log('Listening at port 3000...'))

app.use(function(req, res, next) {
    console.log(req.method, req.path);
    next();
})

app.get('/', (req, res) => {
    res.render( 'index', {title: 'Hall of Fame', people: locals.people} );
})

