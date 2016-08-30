(function() {
	'use strict';

	angular
		.module('app.core')
		.factory('locationService', locationService);

	locationService.$inject = ['$http'];
 
	function locationService($http) {
		return {
			getLocation: getLocation
		};

		function getLocation() {
			return $http.jsonp('http://ipinfo.io/json?callback=JSON_CALLBACK', {cache: true})
						.then(getLocationComplete);

			function getLocationComplete(response) {
				return response.data;
			}
		}
	}	
})();