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

	topNavCtrl.$inject = ['$location', '$scope'];

	function topNavCtrl($location, $scope) {
		var vm = this;

		vm.current = current;
		vm.$scope = isActiveTop;

		function current() {
			$location.path('/user');
		}

		function isActiveTop(viewLocation) {
			return viewLocation === $location.path();
		}
	}

})();