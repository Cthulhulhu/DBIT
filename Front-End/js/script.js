// ----------------------------------
//	onload.js
//	Loads on doc.ready
// ---------------------------------- 



(function($) {
		
 
	$(document).ready(function() {
		console.log("Entering: $(document).ready()");

		// initialize our socket code.
		$.fn.initSockets();



		console.log("Exiting: $(document).ready()");
	}) // END document.ready
})(jQuery);
