$(document).ready(function() {
	var home_header = $('#home_header');

	var headers = [
		{
			id: 'home_header',
			marker: home_header.offset().top,
			background: home_header.css('background-image')
		},
		{
			id: 'what_header',
			marker: $('#what_header').offset().top,
			background: $('#what_header').css('background-image')
		},
		{
			id: 'who_header',
			marker: $('#who_header').offset().top,
			background: $('#who_header').css('background-image')
		},
		{
			id: 'news_header',
			marker: $('#news_header').offset().top, 
			background: $('#news_header').css('background-image')
		},
		{ 
			id: 'partners_header',
			marker: $('#partners_header').offset().top, 
			background: $('#partners_header').css('background-image')
		}
	];

	var curMarker = -1
	for(var i = 0; i < headers.length; ++i) {
		if( home_header.offset().top >= headers[i].marker )
			curMarker++;
	}

	$(window).scroll(function() {
		var headerTop = $('#home_header').offset().top;

		curMarker = -1;
		for(var i = 0; i < headers.length; ++i) {
			if( headerTop >= headers[i].marker )
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