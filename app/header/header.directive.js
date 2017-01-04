(function() {
	'use strict';

	angular
		.module('app.header')
		.directive('appHeader', appHeader);

	function appHeader() {
		return {
			templateUrl: 'header/header.html',
			restrict: 'E',
			scope: {},
			controller: appHeaderController,
			controllerAs: 'vm'
		};
	}

	appHeaderController.$inject = ['weatherService'];

	function appHeaderController(weatherService) {
		var vm = this;

		vm.city;
		vm.country;

		activate();

		function activate() {
			return weatherService.getWeather().then(function(data) {
					nameCountry(data);
				});
		}

		function nameCountry(data) {
			vm.city = data.name;
			vm.country = data.sys.country;
		}
	}
})();