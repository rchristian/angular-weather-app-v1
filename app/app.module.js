(function() {
	'use strict';

	angular
		.module("app", [
			//Angular modules
			'ngRoute',
			'ngResource',
			//Custom modules
			'app.core',
			'app.header',
			'app.topNav',
			'app.weather'
		])
		.config(configFunction);

	configFunction.$inject = ['$routeProvider'];

	function configFunction($routeProvider) {
		$routeProvider.otherwise({
			redirectTo: '/'
		});
	}

})();