// require js shortcut alias
require.config({
	paths:{
		// Major libraries
		jquery:'libs/jquery/jquery-min',
		underscore:'libs/underscore/underscore-min',
		backbone:'libs/backbone/backbone-min',

		// plugins
		text:'libs/require/text',

		//shortcut to put html outside the js dir
		templates:'../templates'
	}

});

require([
	'views/application',
	'router',
	'viewmanager'
], function (AppView, Router, ViewManager) {

	var appView = ViewManager.create({}, 'AppView', AppView);

	appView.render();

	Router.initialize({
		appView:appView
	});
});
