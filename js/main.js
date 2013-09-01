$(document).ready(function() {
	var le_header = $('#le_header');

	var headers = {
		'le_header': { marker: le_header.offset().top, background: le_header.css('background-image'), elem: le_header, link: $('a[href=#home]') },
		'what_header': { marker: $('#what_header').offset().top, background: $('#what_header').css('background-image'), elem: $('what_header'), link: $('a[href=#what]') },
		'who_header': { marker: $('#who_header').offset().top, background: $('#who_header').css('background-image'), elem: $('#who_header'), link: $('a[href=#who]') },
		'news_header': { marker: $('#news_header').offset().top, background: $('#news_header').css('background-image'), elem: $('#news_header'), link: $('a[href=#news]') }
	}

	$(document).scroll(function() {

		for(var key in headers) {
			if( $(this).scrollTop() >= headers[key].marker ) {
				le_header.css('background', headers[key].background);
			}
		}
	});

	// for( var key in headers ) {
	// 	headers[key].link.click(function() {
	// 		le_header.css('background', headers[key].background);
	// 	});
	// }

	headers['who_header'].link.click(function() {
		le_header.css('background', headers['who_header'].background);
	});

	window.onresize = function() {
		var dummy_right = $('section#what .dummy-background-content-right');
		dummy_right.css('width', $('section#what div.content-right').outerWidth());
		var dummy_bg = $('section#what .content-title .dummy-background-content');
		dummy_bg.css('left', parseInt(dummy_right.position().left, 10) + parseInt(dummy_right.outerWidth(), 10));

		var content_right = $('section#what section.section-content');
		dummy_bg.css('width', parseInt(content_right.css('margin-right'), 10) + parseInt(content_right.css('padding-right'), 10));
	};

	window.onresize();
});