(function() {
	'use strict';

	angular
		.module('app.current')
		.config(currentConfig)

		currentConfig.$inject = ['$routeProvider'];

		function currentConfig($routeProvider) {
			$routeProvider.when('/', {
				templateUrl: 'app/current/current.html',
			});
		}
})();