(function() {
	'use strict';

	angular
		.module('app.topNav')
		.directive('topNav', topNav)

	function topNav() {
		return {
			templateUrl: 'app/nav/topNav/topNav.html',
			restrict: 'E',
			scope: {},
			controller: topNavCtrl,
			controllerAs: 'vm'
		};
	}

	function topNavCtrl() {
		var vm = this;

		vm.changeTempUnit = changeTempUnit;
		vm.selectedClass = 'selected';
		vm.temp;
		vm.unselectedClass = 'unselected';

		
		function changeTempUnit() {
			if (vm.selectedClass === "selected") {
				vm.selectedClass = 'unselected'; //F unselected
				vm.unselectedClass = 'selected'; //C selected
				vm.temp = Math.round((vm.temp - 32) * 5 / 9); //Celsius
				vm.windSpeed = (vm.windSpeed * 0.44704).toFixed(1); // M/S
			} else if (vm.unselectedClass === 'selected') {
				vm.unselectedClass = 'unselected'; //C unselected
				vm.selectedClass = 'selected'; //F selected
				vm.temp = Math.round(vm.temp * 1.8 + 32); //Faren
				vm.windSpeed = (vm.windSpeed / 0.44704).toFixed(1); //MPH
			}
		}
	}

})();