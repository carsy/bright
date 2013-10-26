/* global define:false */

define('footer', ['jquery'], function ($) {
	'use strict';

	var footer = {
		render: function () {
			$('footer').load('views/footer.html');
		}
	};

	return footer;
});