(function() {
	'use strict';

	angular
		.module('app.weather')
		.controller('WeatherController', WeatherController);

	WeatherController.$inject = ['userLocationFactory', 'weatherFactory'];


	function WeatherController(userLocationFactory, weatherFactory) {
		/* jshint validthis: true */
		var vm = this;

		vm.changeTempUnit = changeTempUnit;
		vm.dayNight;
		vm.desc;
		vm.humid;
		vm.icon;
		vm.selectedClass = 'selected';
		vm.temp;
		vm.unselectedClass = 'unselected';
		vm.userLocation;
		vm.windDirect;
		vm.windSpeed;

		activateLocation();
		activateWeather();

		function activateLocation() {
			return userLocationFactory.getUserLocation().then(function(userLocation) {
				vm.userLocation = userLocation;
				return vm.userLocation;
			});
		}

		function activateWeather() {
			return userLocationFactory.getUserLocation().then(fetchZipCountry);

			function fetchZipCountry(data) {
				var zipCountry = data.zip + ',' + data.countryCode;
				weatherFactory.getCurrent(zipCountry).then(function(data) {
					weatherInfo(data);
				});
			}
		}

		function changeTempUnit() {
			if (vm.selectedClass === "selected") {
				vm.selectedClass = 'unselected'; //F unselected
				vm.unselectedClass = 'selected'; //C selected
				vm.temp = Math.round((vm.temp - 32) * 5 / 9); //Celsius
				vm.windSpeed = (vm.windSpeed * 0.44704).toFixed(1); // M/S
			} else if (vm.unselectedClass === 'selected') {
				vm.unselectedClass = 'unselected'; //C unselected
				vm.selectedClass = 'selected'; //F selected
				vm.temp = Math.round(vm.temp * 1.8 + 32); //Faren
				vm.windSpeed = (vm.windSpeed / 0.44704).toFixed(1); //MPH
			}
		}

		function weatherInfo(data) {
			var sunrise = data.sys.sunrise;
			var sunset = data.sys.sunset;

			vm.dayNight = dayNightSet(sunrise, sunset);
			vm.desc = data.weather[0].description;
			vm.humid = data.main.humidity;
			vm.icon = data.weather[0].id;
			vm.temp = Math.round(data.main.temp); //Faren
			vm.windDirect = data.wind.deg;
			vm.windSpeed = (data.wind.speed).toFixed(1); //MPH

			function dayNightSet(sunrise, sunset) {
				var time;
				var sun = (Date.now() >= sunrise * 1000 && Date.now() <= sunset * 1000);
				if (sun) {
					time = 'day';
				} else {
					time = 'night';
				}
				return {
					time: time
				};
			}
		}
	}
})();
