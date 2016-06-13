(function() {
	'use strict';

	angular
		.module('app.bottomNav')
		.directive('bottomNav', bottomNav)

	function bottomNav() {
		return {
			templateUrl: 'app/nav/bottomNav/bottomNav.html',
			restrict: 'E',
			scope: {},
			controller: bottomNavCtrl,
			controllerAs: 'vm'
		};
	}

	bottomNavCtrl.$inject = ['$location', '$scope'];

	function bottomNavCtrl($location, $scope) {
		var vm = this;

		vm.fiveDay = fiveDay;
		vm.now = now;

		vm.$scope = isActiveBottom;
		function isActiveBottom(viewLocation) {
			return viewLocation === $location.path();
		}

		function fiveDay() {
			$location.path('app/fiveDay/fiveDay.html');
		}

		function now() {
			$location.path('/app/current/current.html')
		}
	}
})();