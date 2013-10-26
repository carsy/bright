/* global require:false */
/* global console:false */

require.config({
	paths: {
		// app specific
		'what-section': 'sections/what-section',
		'who-section': 'sections/who-section',
		'news-section': 'sections/news-section',
		'partners-section': 'sections/partners-section',
		'contacts-section': 'sections/contacts-section',

		// vendor
		'jquery': '../vendor/jquery/jquery',
		'gmaps': '../vendor/gmaps/gmaps',
		'async': '../vendor/requirejs-plugins/src/async'
	}
});

require(['app'], function (app) {
	'use strict';

	console.log(app);
});