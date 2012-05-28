
function initSockets(io, host, port, serverName) {

	var http = require('http');



	io.sockets.on('connection', function (socket) {
		console.log("New Client has connected.");

		
		
		// Maybe at some later point we could have a "media" even that just handles all of the plex stuff.
		socket.on('PlayPausePressed', function () {
			// url for play pause: http://192.168.1.100:32400/system/players/NYOGTHA.local/playback/pause
			console.log("PlayPausePressed Command recieved.");

			// onptions used for hitting the plex server.
			var options = {
				host: host,
				port: port,
				path: serverName,
				method: 'GET'
			};
			options.path += '/playback/pause';

			var req = http.request(options, function(res) {
				socket.emit("PlayPausePressed-Confirmation");
			});
			req.end();
		});

		socket.on('StopPressed', function () {
			console.log("StopPressed Command recieved.");

			// onptions used for hitting the plex server.
			var options = {
				host: host,
				port: port,
				path: serverName,
				method: 'GET'
			};
			options.path += '/playback/stop';

			var req = http.request(options, function(res) {
				socket.emit("StopPressed-Confirmation");
			});
			req.end();
		});

		socket.on('EnterPressed', function () {
			console.log("EnterPressed Command recieved.");

			// onptions used for hitting the plex server.
			var options = {
				host: host,
				port: port,
				path: serverName,
				method: 'GET'
			};
			options.path += '/navigation/select';

			var req = http.request(options, function(res) {
				socket.emit("EnterPressed-Confirmation");
			});
			req.end();
		});
		socket.on('backButton', function () {
			console.log("backButton Command recieved.");

			// onptions used for hitting the plex server.
			var options = {
				host: host,
				port: port,
				path: serverName,
				method: 'GET'
			};
			options.path += '/navigation/back';

			var req = http.request(options, function(res) {
				socket.emit("backButton-Confirmation");
			});
			req.end();
		});
	});

}

exports.initSockets = initSockets;