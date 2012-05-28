var http = require('http');
var url = require("url");
var exec = require("child_process").exec;
//var io = require('socket.io');
var express = require('express');
var varsServer = require('./dbit_modules/varsServer.js');
var dbitSockets = require('./dbit_modules/dbitSockets.js');


//var app = express.createServer();
//app.use(express.logger());

var app = require('express').createServer()
	, io = require('socket.io').listen(app);

app.listen(1337);

// Initialize sockets
dbitSockets.initSockets(io, varsServer.globalVars.PlexHostName, 
	varsServer.globalVars.PlexPortNumber, varsServer.globalVars.PlexServerName);


/*
var currentDirectory = __dirname + "/" +varsServer.globalVars.frontEndDirectory;

app.get('/', function (req, res) {

	res.sendfile(__dirname + '/index.html');
	console.log(currentDirectory + '/index.html');
});



app.get('/test', function(req,res) {

	res.send('Hello World');
	io.socket.on('connection', function(socket) {
		socket.emit('news', {hello: 'world' });
		socket.on('my other event', function(data) {
			console.log(data);
		});
	});
});

console.log('Express server started on port %s', app.address().port);

function start(response) {
	var content = "empty";

	exec("ls -l ~/../../../../../../Volumes/YIDHRA/Full\\ Length\\ Movies/ | grep ^-", function (error, stdout, stderr) {
		content = stdout;
		console.log(content);
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write(content);
		response.end();
	});

	//return content;
}
*/
/*
http.createServer(function(request, response) {
	start(response);
	console.log('in port 8888')
}).listen(8888);

console.log("%%%%%%%%%%%%%%");
console.log("Start of File.");
console.log("end of start");
*/