define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/contact/page.html']
,function ($,_,Backbone,ContactTemplate){
	var contactPage = Backbone.View.extend({
		el: '#content',
		render: function(){
			this.$el.html(ContactTemplate);
		}
	});

	return contactPage;
});