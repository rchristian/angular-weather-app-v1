(function() {
	'use strict';

	angular
		.module('app.core')
		.service('conversionService', conversionService);

	function conversionService () {
		var service = this;

		service.tempUnits = {
			farhenheit: 'farhenheit',
			celsius: 'celsius'
		}

		service.selectedUnit = 'farhenheit';

		service.convertTemperature = function(temp, wSpeed, tempUnit) {
			if(service.selectedUnit === tempUnit) {
				return temp;
			} else if (service.selectedUnit === service.tempUnits.farhenheit) {
				return Math.round(temp * 1.8 + 32);
			} else if (service.selectedUnit === service.tempUnits.celsius) {
				return Math.round((temp - 32) * 5 / 9);
			} else {
				throw Error("Invalid unit");
			}
		}
	}
})();