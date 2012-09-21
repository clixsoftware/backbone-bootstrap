define([
	'jquery',
	'underscore',
	'backbone',
	'viewmanager'
], function($, _, Backbone, Vm){
	var AboutPage = Backbone.View.extend({
		el: '#content',
		render: function () {
			this.$el.find('a[href="' + window.location.hash + '"]').addClass('disabled');
		}
	});
	return AboutPage;
});
