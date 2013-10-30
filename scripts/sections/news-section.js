/* global define:false */

define('news-section', ['jquery'], function ($) {
	'use strict';

	var section = {
		render: function (callback) {
			$('#news').load('../views/news_section.html', callback);
		},
		load: function () {

			var news_section = $('#news');
			$('.expander', news_section).click(function (event) {
				$('*').stop(); // TO REMOVE

				$('.expanded-content[data-expanded-content="' + $(this).attr('data-expander') + '"]', news_section)
					.slideToggle('slow');

				if ($(this).children().text() == '+') {
					$(this).children().text('>');

					$('.expander', news_section).not($(this)).each(function () {
						if ($(this).children().text() == '+')
							return;

						$(this).children().text('+');


						$('.expanded-content[data-expanded-content="' + $(this).attr('data-expander') + '"]', news_section)
							.slideToggle('fast');
					});
				} else {
					$(this).children().text('+');
				}

				event.preventDefault();
			});
		} // end load
	};

	return section;
});