/* global define:false */

define('partners-section', ['jquery'], function ($) {
	'use strict';

	var partners = {
		render: function () {
			$('#partners').load('../views/partners_section.html');
		}
	};

	return partners;
});