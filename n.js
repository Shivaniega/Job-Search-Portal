var express = require('express');

var app = express();

app.use(express.static(__dirname));

app.get('/', function (req, res) {

    res.sendFile(__dirname + '/homepage.html');

});

app.get('/about', function (req, res) {

    res.sendFile(__dirname + '/about.html');

});

app.get('/alljobs', function (req, res) {

    res.sendFile(__dirname + '/alljobs.html');

});

app.get('/contact', function (req, res) {

    res.sendFile(__dirname + '/contact.html');

});

app.get('/login', function (req, res) {

    res.sendFile(__dirname + '/login.html');

});

app.get('/govt', function (req, res) {

    res.sendFile(__dirname + '/govt.html');

});

app.get('/intern', function (req, res) {

    res.sendFile(__dirname + '/intern.html');

});

app.get('/dash', function (req, res) {

    res.sendFile(__dirname + '/dash.html');

});

app.get('/editpro.html', function (req, res) {

    res.sendFile(__dirname + '/editpro.html');

});

app.get('/alljobs', function (req, res) {

    res.sendFile(__dirname + '/alljobs.html');

});

app.get('/alljobs', function (req, res) {

    res.sendFile(__dirname + '/alljobs.html');

});

app.get('/alljobs', function (req, res) {

    res.sendFile(__dirname + '/alljobs.html');

});

app.listen(9898);

