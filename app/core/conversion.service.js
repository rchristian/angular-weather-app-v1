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
		};

		service.selectedUnit = 'farhenheit';

		service.convertTemperature = function(temp, tempUnit) {
			if (service.selectedUnit === tempUnit) {
				return temp;
			} else if (service.selectedUnit === service.tempUnits.farhenheiht) {
				return Math.round(temp * 1.8 + 32);
			} else if (service.selectedUnit === service.tempUnits.celsius) {
				return Math.round((temp - 32) * 5 / 9);
			} else {
				throw Error("Invalid unit");
			}
		}

		service.speedUnits = {
			mph: 'mph',
			ms: 'ms'
		}

		service.selectedSpeed = 'mph';

		service.convertSpeed = function(speed, speedUnit) {
			if(service.selectedSpeed === speedUnit) {
				return speed;
			} else if (service.selectedSpeed === service.speedUnits.mph) {
				return (speed / 0.44704).toFixed(0);
			} else if (service.selectedSpeed === service.speedUnits.ms) {
				return (speed * 0.44704).toFixed(0);
			} else {
				throw Error("Invalid unit");
			}
		}
	}
})();