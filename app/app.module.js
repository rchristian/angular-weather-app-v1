(function() {
	'use strict';

	angular
		.module("app", [
			//Angular modules
			'ngRoute',
			//Custom modules
			'app.topNav',
			'app.user',
			'app.header',
			'app.weatherAlert',
			'app.current',
			'app.fiveDay',
			'app.bottomNav'
		])
		.config(configFunction);

	configFunction.$inject = ['$routeProvider'];

	function configFunction($routeProvider) {
		$routeProvider.otherwise({
			redirectTo: '/'
		});
	}

})();