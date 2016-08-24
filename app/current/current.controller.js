(function() {
	'use strict';

	angular
		.module('app.current')
		.controller('CurrentController', CurrentController);

	CurrentController.$inject = ['$scope', 'userData', 'currentFactory'];

	function CurrentController($scope, userData, currentFactory) {
		var vm = this;


	}
})();