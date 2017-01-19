(function() {
	'use strict';

	angular
		.module('app.header')
		.component('appHeader', {
			templateUrl: 'header/header.html',
			controller: appHeaderController,
			binding: {}
	});

	appHeaderController.$inject = ['weatherService'];

	function appHeaderController(weatherService) {
		var ctrl = this;

		ctrl.city;
		ctrl.country;

		activate();

		function activate() {
			return weatherService.getWeather().then(function(data) {
					nameCountry(data);
				});
		}

		function nameCountry(data) {
			ctrl.city = data.name;
			ctrl.country = data.sys.country;
		}
	}
})();