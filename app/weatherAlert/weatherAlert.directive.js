(function() {
	'use strict';

	angular
		.module('app.weatherAlert')
		.directive('weatherAlert', weatherAlert);

	function weatherAlert() {
		return {
			templateUrl: 'app/weatherAlert/weatherAlert.html',
			restict: 'E',
			scope: {}
		}
	}
})();