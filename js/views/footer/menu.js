define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/footer/menu.html'
], function($, _, Backbone, footerMenuTemplate){
	var footerMenuView = Backbone.View.extend({
		el: 'footer',
		intialize: function () {

		},
		render: function () {
			$(this.el).html(footerMenuTemplate);
		}
	})

	return footerMenuView;
});
