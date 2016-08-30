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

		vm.country;
		vm.name;

		activate();

		function activate() {
			return weatherService.getWeather().then(function(data) {
					nameCountry(data);
				});
		}

		function nameCountry(data) {
			vm.country = data.sys.country;
			vm.name = data.name;
		}
	}
})();