(function() {
	'use strict';

	angular
		.module("app", [
			//Angular modules
			'ngRoute',
			//Custom modules
			'app.topNav',
			'app.header',
			'app.current',
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