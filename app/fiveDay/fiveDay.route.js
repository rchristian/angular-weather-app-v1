(function() {
	'use strict';

	angular
		.module('app.fiveDay')
		.config(fiveDayConfig)

		fiveDayConfig.$inject = ['$routeProvider'];

		function fiveDayConfig($routeProvider) {
			$routeProvider.when('/fiveDay', {
				templateUrl: 'app/fiveDay/fiveDay.html',
			});
		}
})();