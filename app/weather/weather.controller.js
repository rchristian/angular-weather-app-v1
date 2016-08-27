(function() {
	'use strict';

	angular
		.module('app.weather')
		.controller('WeatherController', WeatherController);

	WeatherController.$inject = ['weatherFactory'];


	function WeatherController(weatherFactory) {
		/* jshint validthis: true */
		var vm = this;
	}
	
})();
