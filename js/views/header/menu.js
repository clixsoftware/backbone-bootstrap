define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/header/menu.html'
], function($, _, Backbone, headerMenuTemplate){
  var HeaderMenuView = Backbone.View.extend({
    el: '.navbar',
    intialize: function () {

    },
    render: function () {
      $(this.el).html(headerMenuTemplate);
      $('a[href="' + window.location.hash + '"]').parent().addClass('active');
    },
    events: {
      'click a': 'highlightMenuItem'
    },
    highlightMenuItem: function (event) {
      $('.active').removeClass('active');
      $(event.currentTarget).parent().addClass('active');
    }
  })

  return HeaderMenuView;
});
