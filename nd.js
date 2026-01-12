var express = require('express');
var mysql = require('mysql2');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static(__dirname)); 
app.use(bodyParser.urlencoded({ extended: true })); 
var connection = mysql.createConnection({
    host:'localhost',     
    user:'root',          
    password:'root',      
    database:'ajay'    
});
connection.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/login.html');
});
app.post('/login', function (req, res) {  
    var username = req.body.username;
    var password = req.body.password;
    var query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    connection.query(query, [username, password], function (err, results) {
        if (err) {
            console.error('Database error:', err);
            res.status(500).send('Database error');
        } else {
            if (results.length > 0) {
                res.send('Login Successful');
            } else {
                res.send('Invalid Credentials');
            }
        }
    });
});
app.listen(9988)
