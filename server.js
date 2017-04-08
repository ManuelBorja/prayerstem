var express = require('express');

var app = express();

app.set('view engine','ejs');

app.get('/', function(req, res){
	res.render('home');
});

var port = process.env.PORT || 1337;
app.listen(port);
console.log("Server running at http://localhost:%d", port);
