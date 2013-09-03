$(document).ready(function() {
	var home_header = $('#home_header');
	var what_header = $('#what_header');
	var who_header = $('#who_header');
	var news_header = $('#news_header');
	var partners_header = $('#partners_header');

	var headers = [
		{
			id: 'home_header',
			marker: home_header.offset().top,
			background: home_header.css('background-image'),
			elem: home_header,
		},
		{
			id: 'what_header',
			marker: what_header.offset().top,
			background: what_header.css('background-image'),
			elem: what_header,
		},
		{
			id: 'who_header',
			marker: who_header.offset().top,
			background: who_header.css('background-image'),
			elem: who_header,
		},
		{
			id: 'news_header',
			marker: news_header.offset().top, 
			background: news_header.css('background-image'), 
			elem: news_header, 
		},
		{ 
			id: 'partners_header',
			marker: partners_header.offset().top, 
			background: partners_header.css('background-image'), 
			elem: partners_header, 
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

	
	$(window).resize(function() {
		var dummy_right = $('section#what .dummy-background-content-right');
		dummy_right.css('width', $('section#what div.content-right').outerWidth());
		var dummy_bg = $('section#what .content-title .dummy-background-content');
		dummy_bg.css('left', parseInt(dummy_right.position().left, 10) + parseInt(dummy_right.outerWidth(), 10));

		var content_right = $('section#what section.section-content');
		dummy_bg.css('width', parseInt(content_right.css('margin-right'), 10) + parseInt(content_right.css('padding-right'), 10));
	});

	$(window).resize();
});