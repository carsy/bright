/* global define:false */

define('header', ['jquery'], function ($) {
	'use strict';

	var header = {
		render: function (callback) {
			$('#header').load('views/header.html', callback);
		},
		load: function () {

			var headers = [{
				selector: '#home',
				bg_class: 'header-bg-home'
			}, {
				selector: '#what',
				bg_class: 'header-bg-what'
			}, {
				selector: '#who',
				bg_class: 'header-bg-who'
			}, {
				selector: '#news',
				bg_class: 'header-bg-news'
			}, {
				selector: '#partners',
				bg_class: 'header-bg-partners'
			}, {
				selector: '#contacts',
				bg_class: 'header-bg-contacts'
			}];

			$(window).scroll(this.updateBackground);

			// Adds animation for section transitions
			$('a[href=#home], a[href=#what], a[href=#who], a[href=#news], a[href=#partners], a[href=#contacts]').click(function (event) {
				var href = $(this).attr('href');
				var top2scroll2 = (href == '#home' ? 0 : $(href + '_header').offset().top);

				window.stop();

				$('html, body').animate({
					scrollTop: top2scroll2 + 1,
				}, 500, function () {
					$('#header_container > .dummy-background-1').css('background-color', headers[curMarker].background1);
					$('#header_container > .dummy-background-2').css('background-color', headers[curMarker].background2);
				});

				history.replaceState(null, '', href); // FIXME

				event.preventDefault();
			});
		},
		updateBackground: function () {
			var headerTop = $('#header').offset().top;

			curMarker = -1;
			for (var i = 0; i < headers.length; ++i) {
				if (headerTop >= $(headers[i].selector).offset().top)
					curMarker++;
			}

		}
	};

	return header;
});