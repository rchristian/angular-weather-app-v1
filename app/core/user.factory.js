(function() {
	'use strict';

	angular
		.module('app.core')
		.factory('userLocationFactory', userLocationFactory);

	userLocationFactory.$inject = ['$http'];
 
	function userLocationFactory($http) {
		return {
			getUserLocation: getUserLocation
		};

		function getUserLocation() {
			return $http.jsonp('http://ipinfo.io/json?callback=JSON_CALLBACK')
						.then(getUserLocationComplete);

			function getUserLocationComplete(response) {
				var userLocation = response.data;
				return userLocation;
			}
		}
	}	
})();