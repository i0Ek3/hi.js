// 
// app.js
// @ianpasm(kno30826@gmail.com)
// 2018-07-28 20:43:35
// 

var express = require('express'); // require means to call express module
var app = express();

app.get('/', function(req, res) {
    res.send('Hello Node!');
});

app.listen(3456, function() { 
    console.log('app is listening at port 3456');
});
