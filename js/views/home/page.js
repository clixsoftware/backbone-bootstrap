define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/home/page.html'
], function($, _, Backbone, homePageTemplate){
	var HomePage = Backbone.View.extend({
		el: '#content',
		render: function () {
			$(this.el).html(homePageTemplate);
		}
	});
	return HomePage;
});
