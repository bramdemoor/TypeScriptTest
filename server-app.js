var fs = require('fs');
var express = require('express.io');
var app = express();
app.http().io();

app.io.set('log level', 1);

app.use(express.logger('dev'));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/css'));

app.io.route('disconnect', function(req) {
	console.log('Player disconnected: ' + req.socket.id);          
});

app.listen(8080);

var upd = function() {
	console.log('tick');
	setTimeout(upd, 10);
};

upd();   