/* global define:false */

define('home-section', ['jquery'], function ($) {
	'use strict';

	var home_section = {

		render: function () {
			$('#home').load('views/home_section.html');
		},
	};

	return home_section;
});