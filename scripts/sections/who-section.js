/* global define:false */

define('who-section', ['jquery'], function ($) {
	'use strict';

	var section = {
		render: function (callback) {
			$('#who').load('../../views/who_section.html', callback);
		},
		load: function () {
			$('#who .section-content img').mouseenter(function () {
				$(this).addClass('highlighted');
			}).mouseleave(function () {
				$(this).removeClass('highlighted');
			});

			var who_section = $('#who');

			$('.selected-content[data-selected-content="1"]', who_section).show();

			$('.selector', who_section).click(function () {


				if (!$(this).hasClass('selected')) {
					$('*').stop(); // TO REMOVE

					$('.selected-content[data-selected-content="' + $(this).attr('data-selector') + '"]', who_section)
						.slideToggle('slow');

					$(this).addClass('selected');

					$('.selector', who_section).not($(this)).each(function () {
						if (!$(this).hasClass('selected'))
							return;

						$(this).removeClass('selected');


						$('.selected-content[data-selected-content="' + $(this).attr('data-selector') + '"]', who_section)
							.slideToggle('fast');
					});
				}

			});
		}
	};

	return section;
});