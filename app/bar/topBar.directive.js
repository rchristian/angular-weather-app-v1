(function() {
	'use strict';

	angular
		.module('app.topBar')
		.directive('topBar', topBar);

	function topBar() {
		return {
			templateUrl: 'topBar.html',
			restrict: 'E',
			scope: {},
			controller: TopBarController,
			controllerAs: 'vm'
		};
	}

	function TopBarController() {
		var vm = this;

		vm.celsClass = 'unselected';
		vm.changeTempUnit = changeTempUnit;
		vm.fahrClass = 'selected';

		function changeTempUnit() {
			if (vm.fahrClass === "selected") {
				vm.fahrClass = 'unselected'; //F unselected
				vm.celsClass = 'selected'; //C selected
				vm.temp = Math.round((vm.temp - 32) * 5 / 9); //Celsius
				vm.windSpeed = (vm.windSpeed * 0.44704).toFixed(1); // M/S
			} else if (vm.celsClass === 'selected') {
				vm.celsClass = 'unselected'; //C unselected
				vm.fahrClass = 'selected'; //F selected
				$rootScope.temp = Math.round(vm.temp * 1.8 + 32); //Fahren
				vm.windSpeed = (vm.windSpeed / 0.44704).toFixed(1); //MPH
			}
		}
	}
})();