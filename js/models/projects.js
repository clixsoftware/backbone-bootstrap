define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  var projectsModel = Backbone.Model.extend({
    defaults: {
      someValue: 1337
    },
    initialize: function(){

    }

  });
  return projectsModel;
});
