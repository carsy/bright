$(document).ready(function() {
	var le_header = $('#le_header');

	var headers = {
		'le_header': { marker: le_header.offset().top, background: le_header.css('background-image'), elem: le_header },
		'what_header': { marker: $('#what_header').offset().top, background: $('#what_header').css('background-image'), elem: $('what_header') }
		// 'who_header': { marker: $('#who_header').offset().top, background: $('#who_header').css('background-image'), elem: $('#who_header') }
	}


	$(document).scroll(function() {

		for(var key in headers) {
			if( $(this).scrollTop() >= headers[key].marker ) {
				console.log(key + ' | my pos=' + $(this).scrollTop() + ' | marker pos=' + headers[key].marker);
				le_header.css('background-image', headers[key].background);
			}
		}
	});
});