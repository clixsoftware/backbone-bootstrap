define([
	'jquery',
	'underscore',
	'backbone',
	'viewmanager',
	'text!templates/about/page.html',
	'views/about/section'
], function($, _, Backbone, Vm, aboutPageTemplate, SectionView){
	var AboutPage = Backbone.View.extend({
		el: '#content',
		render: function () {
			this.$el.html(aboutPageTemplate);

			var sectionView = Vm.create(this, 'AboutSectionView', SectionView, {section: this.options.section});
			sectionView.render();

		}
	});
	return AboutPage;
});
