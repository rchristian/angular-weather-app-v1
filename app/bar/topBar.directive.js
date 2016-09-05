(function() {
	'use strict';

	angular
		.module('app.topBar')
		.directive('topBar', topBar);

	function topBar() {
		return {
			templateUrl: 'app/bar/topBar.html',
			restrict: 'E',
			scope: {},
			controller: 'WeatherController',
			controllerAs: 'vm'
		};
	}
})();