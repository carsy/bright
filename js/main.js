$(document).ready(function() {
	var home_header = $('#home_header');

	var headers = [
		{
			selector: '#home_header',
			background: home_header.css('background-image')
		},
		{
			selector: '#what_header',
			background: $('#what_header').css('background-image')
		},
		{
			selector: '#who_header',
			background: $('#who_header').css('background-image')
		},
		{
			selector: '#news_header',
			background: $('#news_header').css('background-image')
		},
		{ 
			selector: '#partners_header',
			background: $('#partners_header').css('background-image')
		}
	];

	var curMarker = -1
	for(var i = 0; i < headers.length; ++i) {
		if( home_header.offset().top >= $(headers[i].selector).offset().top )
			curMarker++;
	}

	$(window).scroll(function() {
		var headerTop = $('#home_header').offset().top;

		curMarker = -1;
		for(var i = 0; i < headers.length; ++i) {
			if( headerTop >= $(headers[i].selector).offset().top )
				curMarker++;
		}
		$('#home_header').css('background', headers[curMarker].background);
		
	});

	
	$('a[href=#home], a[href=#what], a[href=#who], a[href=#news], a[href=#partners]').click(function() {
		var href = $(this).attr('href');
		var top2scroll2 = (href == '#home' ? 0 : $(href + '_header').offset().top);
		$('html, body').animate({
 			scrollTop: top2scroll2+1,
		}, 1000, function () {
			$('#home_header').css('background', headers[curMarker].background);
		});
	})

});