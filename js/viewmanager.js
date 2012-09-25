// Use this as a quick template for future modules
define([
	'jquery',
	'underscore',
	'backbone',
	'events'
], function ($, _, Backbone, Events) {
	var views = {};
	var create = function (context, name, View, options) {

		if (typeof views[name] !== 'undefined') {

			// undelegate Events for view
			views[name].undelegateEvents();

			// if clean function is defined
			if (typeof views[name].clean === 'function') {
				views[name].clean();
			}
		}

		// create view
		var view = new View(options);
		views[name] = view;

		// set children view to app-object
		if (typeof context.children === 'undefined') {
			context.children = {};
			context.children[name] = view;
		} else {
			context.children[name] = view;
		}

		// trigger event -> events.js
		Events.trigger('viewCreated',view);

		return view;
	};

	return {
		create:create
	};
});
