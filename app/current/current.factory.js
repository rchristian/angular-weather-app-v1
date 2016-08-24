(function() {
	'use strict';

	angular
		.module('app.current')
		.factory('currentFactory', currentFactory);

	currentFactory.$inject = ['$http', 'city'];

	function currentFactory($http, city) {
		var rootAPI = 'api.openweathermap.org/data/2.5/weather?q=';
		var apiId = '&appid=f72650c40fef189a346723016e3b5ca6';
		var tempDefault = '&units=imperial';
		var jsonp = '&callback=test';

		$http.get(rootAPI + city + appId + tempDefault + jsonp)

	}
})();