/* ----------------------------------
 *
 * 	init.js
 * 	Initializes Site Specific plugins/functions
 *
 * ---------------------------------- */


(function($) {

	$.fn.initSockets = function() {

		console.log("testing!");
		var socket = io.connect('http://192.168.1.100:1337');

		socket.on('PlayPausePressed-Confirmation', function() {
			console.log("Received Confirmation on PlayPausePressed.");
		});

		$('button.playPause').click(function() {
			console.log("button.playPause");
			socket.emit('PlayPausePressed');

		});

		$('button.stopPlayback').click(function() {
			console.log("button.stopPlayback!");
			socket.emit('StopPressed');

		});

		$('button.enterButton').click(function() {
			console.log("button.enterButton!");
			socket.emit('EnterPressed');

		});

		$('button.backButton').click(function() {
			console.log("button.backButton!");
			socket.emit('BackPressed');

		});
	}


})(jQuery);
