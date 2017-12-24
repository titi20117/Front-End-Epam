const express = require('express');
const app = express();
app.listen(8080, function () {
    console.log('App listening on port 8080!');
});

var books = require('./models/book.json');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/books', function (req, res) {
    res.send(books.items);
});

