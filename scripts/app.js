/* global define:false */

define('app', ['header', 'what-section', 'who-section', 'news-section', 'partners-section', 'contacts-section', 'footer'],
	function (header, what_section, who_section, news_section, partners_section, contacts_section, footer) {
		'use strict';

		what_section.render(what_section.load);
		who_section.render(who_section.load);
		news_section.render(news_section.load);
		partners_section.render();
		contacts_section.render(contacts_section.load);

		header.render(header.load);
		footer.render();

		return 'B R I G H T';
	});