(function() {
	'use strict';

	angular
		.module('app.header')
		.directive('appHeader', appHeader)

	function appHeader() {
		return {
			templateUrl: 'app/header/header.html',
			restrict: 'E',
			scope: {},
			controller: appHeaderCtrl,
			controllerAs: 'vm'
		};
	}

	function appHeaderCtrl() {
		var vm = this;
	}
})();