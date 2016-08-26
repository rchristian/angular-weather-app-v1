(function() {
	'use strict';

	angular
		.module('app.current')
		.factory('currentFactory', currentFactory);

	currentFactory.$inject = ['$http'];

	function currentFactory($http) {
		var rootAPI = 'api.openweathermap.org/data/2.5/weather?q=';
		var locationOf = '';
		var apiId = '&appid=f72650c40fef189a346723016e3b5ca6';
		var tempDefault = '&units=imperial';
		var jsonp = '&callback=test';

		$http.get(rootAPI + locationOf + appId + tempDefault + jsonp)

	}
})();