// Filename: router.js
define([
	'jquery',
	'underscore',
	'backbone',
	'viewmanager'
], function ($, _, Backbone, Viewmanager) {
	var AppRouter = Backbone.Router.extend({
		routes:{
			// Pages
			'/about/:section':'about',
			'/about':'about',
			'/contact':'contact',

			// Default - catch all
			'*actions':'defaultAction'
		}
	});

	var initialize = function (options) {
		var appView = options.appView;
		var router = new AppRouter(options);

		router.on('route:defaultAction', function (actions) {
			require(['views/home/page'], function (HomePage) {
				var homePage = Viewmanager.create(appView, 'HomePage', HomePage);
				homePage.render();
			});
		});

		router.on('route:about', function (section) {
			require(['views/about/page'], function (AboutPage) {
				var aboutPage = Viewmanager.create(appView, 'AboutPage', AboutPage, {section:section});
				aboutPage.render();
			});
		});

		router.on('route:contact', function () {
			require(['views/contact/page'], function (ContactPage) {
				var contactPage = Viewmanager.create(appView, 'ContactPage', ContactPage);
				contactPage.render();
			});
		});

		Backbone.history.start();
	};
	return {
		initialize:initialize
	};
});
