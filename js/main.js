$(document).ready(function() {
	var home_header_bg1 = $('#home_header > .dummy-background-1');
	var home_header_bg2 = $('#home_header > .dummy-background-2');

	var headers = [
		{
			selector: '#home_header',
			background1: home_header_bg1.css('background'),
			background2: home_header_bg2.css('background')
		},
		{
			selector: '#what_header',
			background1: $('#what_header > .dummy-background-1').css('background'),
			background2: $('#what_header > .dummy-background-2').css('background')
		},
		{
			selector: '#who_header',
			background1: $('#who_header > .dummy-background-1').css('background'),
			background2: $('#who_header > .dummy-background-2').css('background')
		},
		{
			selector: '#news_header',
			background1: $('#news_header > .dummy-background-1').css('background'),
			background2: $('#news_header > .dummy-background-2').css('background')
		},
		{ 
			selector: '#partners_header',
			background1: $('#partners_header > .dummy-background-1').css('background'),
			background2: $('#partners_header > .dummy-background-2').css('background')
		}
	];

	var home_header = $('#home_header');
	var curMarker = -1;
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
		$('#home_header > .dummy-background-1').css('background', headers[curMarker].background1);
		$('#home_header > .dummy-background-2').css('background', headers[curMarker].background2);
		
	});

	
	$('a[href=#home], a[href=#what], a[href=#who], a[href=#news], a[href=#partners]').click(function() {
		var href = $(this).attr('href');
		var top2scroll2 = (href == '#home' ? 0 : $(href + '_header').offset().top);
		stop();
		$('html, body').animate({
 			scrollTop: top2scroll2+1,
		}, 500, function () {
			$('#home_header > .dummy-background-1').css('background', headers[curMarker].background1);
			$('#home_header > .dummy-background-2').css('background', headers[curMarker].background2);
		});
	})

});