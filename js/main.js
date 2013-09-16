$(document).ready(function() {
	var home_header_bg1 = $('#home_header > .dummy-background-1');
	var home_header_bg2 = $('#home_header > .dummy-background-2');

	var headers = [
		{
			selector: '#home_header',
			background1: home_header_bg1.css('background-color'),
			background2: home_header_bg2.css('background-color')
		},
		{
			selector: '#what_header',
			background1: $('#what_header > .dummy-background-1').css('background-color'),
			background2: $('#what_header > .dummy-background-2').css('background-color')
		},
		{
			selector: '#who_header',
			background1: $('#who_header > .dummy-background-1').css('background-color'),
			background2: $('#who_header > .dummy-background-2').css('background-color')
		},
		{
			selector: '#news_header',
			background1: $('#news_header > .dummy-background-1').css('background-color'),
			background2: $('#news_header > .dummy-background-2').css('background-color')
		},
		{ 
			selector: '#partners_header',
			background1: $('#partners_header > .dummy-background-1').css('background-color'),
			background2: $('#partners_header > .dummy-background-2').css('background-color')
		},
		{
			selector: '#contacts_header',
			background1: $('#contacts_header > .dummy-background-1').css('background-color'),
			background2: $('#contacts_header > .dummy-background-2').css('background-color')
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
		$('#home_header > .dummy-background-1').css('background-color', headers[curMarker].background1);
		$('#home_header > .dummy-background-2').css('background-color', headers[curMarker].background2);
		
	});

	// Adds animation for section transitions
	$('a[href=#home], a[href=#what], a[href=#who], a[href=#news], a[href=#partners], a[href=#contacts]').click(function(event) {
		var href = $(this).attr('href');
		var top2scroll2 = (href == '#home' ? 0 : $(href + '_header').offset().top);

		window.stop();

		$('html, body').animate({
 			scrollTop: top2scroll2+1,
		}, 500, function () {
			$('#home_header > .dummy-background-1').css('background-color', headers[curMarker].background1);
			$('#home_header > .dummy-background-2').css('background-color', headers[curMarker].background2);
		});

		history.replaceState(null, '', href); // FIXME

		event.preventDefault();
	});
	var what_section = $('#what');

	$('.expander', what_section).click(function(event) {
		$('*').stop();

		$('.expanded-content[data-expanded-content="' + $(this).attr('data-expander') + '"]', what_section)
			.slideToggle('slow');
	
		if( $(this).children().text() == "+" ) {
			$(this).children().text(">");

			$('.expander', what_section).not($(this)).each(function() {
				if ($(this).children().text() == "+")
					return;

				$(this).children().text("+");


				$('.expanded-content[data-expanded-content="' + $(this).attr('data-expander') + '"]', what_section)
					.slideToggle('fast');
				});
		}
		else {
			$(this).children().text("+");
		}

		// history.replaceState(null, '', $(this).id()); // FIXME
		event.preventDefault();
	});

	var news_section = $('#news');
	$('.expander', news_section).click(function(event) {
		$('*').stop();
		
		$('.expanded-content[data-expanded-content="' + $(this).attr('data-expander') + '"]', news_section)
			.slideToggle('slow');
	
		if( $(this).children().text() == "+" ) {
			$(this).children().text(">");

			$('.expander', news_section).not($(this)).each(function() {
				if ($(this).children().text() == "+")
					return;

				$(this).children().text("+");


				$('.expanded-content[data-expanded-content="' + $(this).attr('data-expander') + '"]', news_section)
					.slideToggle('fast')
				});
		}
		else {
			$(this).children().text("+");
		}

		// history.replaceState(null, '', $(this).id()); // FIXME
		event.preventDefault();
	});

	var map;
	var center = new google.maps.LatLng(41.1629652, -8.649747100000013);

	function initialize() {
		var mapOptions = {
			zoom: 15,
			center: center,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
		};
		map = new google.maps.Map($('.content-map')[0], mapOptions);

		map.setOptions({scrollwheel: false});

		new google.maps.Marker({
			map: map,
			draggable: false,
			animation: google.maps.Animation.DROP,
			position: center
		});
	}

	google.maps.event.addDomListener(window, 'load', initialize);

	$('.content-map').click(function() {
		map.setOptions({scrollwheel: true});
	}).mouseleave(function() {
		map.setOptions({scrollwheel: false});
	});

	/*

	var context = document.getElementById('what_canvas').getContext('2d');
	var x0 = 25, y0 = 10,
		xd = 7, yd = 7;

	context.beginPath();
	context.moveTo(x0, y0);
	for(i = 0; i < 6; ++i) {
		context.lineTo((x0 += xd), y0 - yd);
		context.lineTo((x0 += xd), y0);
	}
	context.lineWidth = 2;

	context.strokeStyle = 'white';
	context.stroke();

	*/
});