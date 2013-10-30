/* global define:false */

define('contacts-section', ['jquery', 'gmaps'], function ($, google) {
	'use strict';

	var section = {
		render: function (callback) {
			$('#contacts').load('../views/contacts_section.html', callback);
		},
		load: function () {

			$('body').mousedown(function (e) {
				if (e.button == 1)
					return false;
				e.preventDefault();
			});

			var center = new google.maps.LatLng(41.1493783, -8.606509599999981);

			var mapOptions = {
				zoom: 15,
				center: center,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				scrollwheel: false
			};

			var map = new google.maps.Map($('.content-map')[0], mapOptions);

			function initialize() {

				$('.content-map').css({
					opacity: 0.8
				});

				var marker = new google.maps.Marker({
					map: map,
					draggable: false,
					animation: google.maps.Animation.DROP,
					position: center
				});

				google.maps.event.addListener(marker, 'click', function () {
					map.setZoom(15);
					map.setCenter(marker.getPosition());
				});

			}

			google.maps.event.addDomListener(window, 'load', initialize);

			$('.content-map').mousedown(function () {
				$(this).css({
					opacity: 1
				});
				map.setOptions({
					scrollwheel: true
				});
			}).mouseleave(function () {
				$(this).css({
					opacity: 0.8
				});
				map.setOptions({
					scrollwheel: false
				});
			});
		} // end load
	};

	return section;
});