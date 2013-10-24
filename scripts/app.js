/* global define:false */

define('app', ['header', 'what-section', 'who-section', 'news-section', 'contacts-section'],
  function (header, what_section, who_section, news_section, contacts_section) {
    'use strict';

    header.load();
    what_section.load();
    who_section.load();
    news_section.load();
    contacts_section.load();

    return 'B R I G H T';
  });