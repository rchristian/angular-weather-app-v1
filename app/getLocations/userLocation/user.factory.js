(function() {
	'use strict';

	angular
		.module('app.user')
		.factory('userLocationFactory', userLocationFactory);

	userLocationFactory.$inject = ['$http'];
 
	function userLocationFactory($http) {
		return {
			getUserLocation: getUserLocation
		};

		function getUserLoc() {
			return $http.jsonp('http://ip-api.com/json?callback=JSON_CALLBACK')
				.then(getUserLocationComplete);

			function getUserLocationComplete(response) {
				var userLocation = response.data;
				return userLocation;
			}
		}
	}	
})();