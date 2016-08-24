(function() {
	'use strict';

	angular
		.module('app.user')
		.controller('userLocatonController', userLocationController);

	userLocationController.$inject = ['userLocationFactory'];

	function userLocationController(userLocationFactory) {
		var vm = this;

		userLocationFactory.getUserLocation()
			.then(function(userLocation) {
				vm.userLocation = userLocation;
			})
	}
})();