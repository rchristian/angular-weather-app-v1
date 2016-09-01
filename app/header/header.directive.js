(function() {
	'use strict';

	angular
		.module('app.header')
		.directive('appHeader', appHeader);

	function appHeader() {
		return {
			templateUrl: 'app/header/header.html',
			restrict: 'E',
			scope: {},
			controller: appHeaderCtrl,
			controllerAs: 'vm'
		};
	}

	appHeaderCtrl.$inject = ['weatherService'];

	function appHeaderCtrl(weatherService) {
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