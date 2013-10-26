/* global define:false */

define('what-section', ['jquery'], function ($) {
	'use strict';

	var section = {
		render: function (callback) {
			$('#what').load('../../views/what_section.html', callback);
		},
		load: function () {

			var what_section = $('#what');
			$('.expander', what_section).click(function (event) {
				$('*').stop(); // TO REMOVE

				$('.expanded-content[data-expanded-content="' + $(this).attr('data-expander') + '"]', what_section)
					.slideToggle('slow');

				if ($(this).children().text() == '+') {
					$(this).children().text('>');

					$('.expander', what_section).not($(this)).each(function () {
						if ($(this).children().text() == '+')
							return;

						$(this).children().text('+');


						$('.expanded-content[data-expanded-content="' + $(this).attr('data-expander') + '"]', what_section)
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