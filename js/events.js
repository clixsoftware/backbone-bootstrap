define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
  var event = _.extend({}, Backbone.Events);

	event.on("viewCreated",function(view){
		//trigger some event
	});

  return event;
});