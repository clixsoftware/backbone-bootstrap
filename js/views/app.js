define([
  'jquery',
  'underscore',
  'backbone',
  'viewmanager',
  'events',
  'text!templates/layout.html'
], function($, _, Backbone, Viewmanager, Events, layoutTemplate){

  var AppView = Backbone.View.extend({
    el: 'body',
    render: function () {
      var view = this;
      $(this.el).html(layoutTemplate);

	  require(['views/header/menu'], function (HeaderMenuView) {
        var headerMenuView = Viewmanager.create(view, 'HeaderMenuView', HeaderMenuView);
        headerMenuView.render();
      });

	  require(['views/footer/menu'], function (FooterMenuView) {
		var footerMenuView = Viewmanager.create(view, 'FooterMenuView', FooterMenuView);
		footerMenuView.render();
	  });

    }
  });
  return AppView;
});
