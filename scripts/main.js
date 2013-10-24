/* global require:false */
/* global console:false */

require.config({
	paths: {
		'jquery': 'vendor/jquery/jquery',
		'gmaps': 'vendor/gmaps/gmaps',
		'async': 'vendor/requirejs-plugins/src/async'
	}
});

require(['app'], function (app) {
	'use strict';

	console.log(app);
});