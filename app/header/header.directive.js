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

	appHeaderCtrl.$inject = ['userLocationFactory'];

	function appHeaderCtrl(userLocationFactory) {
		var vm = this;

		vm.userLocation;

		activate();

		function activate() {
			return userLocationFactory.getUserLocation().then(function(userLocation) {
				vm.userLocation = userLocation;
			});
		}
	}
})();