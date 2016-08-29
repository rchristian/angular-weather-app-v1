(function() {
	'use strict';

	angular
		.module('app.weather')
		.directive('humidWind', humidWind);

	function humidWind() {
		return {
			templateUrl: 'app/weather/directives/humidWind.html',
			restrict: 'E',
			scope: {},
			controller: HumidWindController,
			controllerAs: 'vm'
		};
	}

	HumidWindController.$inject = ['weatherFactory'];

	function HumidWindController(weatherFactory) {
		var vm = this;

		vm.humid;
		vm.windDirect;
		vm.windSpeed;

		activate();

		function activate() {
			return weatherFactory.weather().then(function(data) {
					humidWind(data);
				});
		}

		function humidWind(data) {
			vm.humid = data.main.humidity;
			vm.windDirect = data.wind.deg;
			vm.windSpeed = (data.wind.speed).toFixed(1); //MPH
		}

	}
})();