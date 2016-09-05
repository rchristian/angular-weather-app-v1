(function() {
	'use strict';

	angular
		.module('app.weather')
		.controller('WeatherController', WeatherController);

	WeatherController.$inject = ['weatherService'];

	function WeatherController(weatherService) {
		var vm = this;

		vm.celsClass = 'unselected';
		vm.changeTempUnit = changeTempUnit;
		vm.dayNight;
		vm.desc;
		vm.fahrClass = 'selected';
		vm.humid;
		vm.icon;
		vm.temp;
		vm.windDirect;
		vm.windSpeed;

		activate();

		function activate() {
			return weatherService.getWeather().then(function(data) {
					weatherInfo(data);
				});
		}

		function changeTempUnit() {
			if (vm.fahrClass === "selected") {
				vm.fahrClass = 'unselected'; //F unselected
				vm.celsClass = 'selected'; //C selected
				vm.temp = Math.round((vm.temp - 32) * 5 / 9); //Celsius
				vm.windSpeed = (vm.windSpeed * 0.44704).toFixed(1); // M/S
			} else if (vm.celsClass === 'selected') {
				vm.celsClass = 'unselected'; //C unselected
				vm.fahrClass = 'selected'; //F selected
				vm.temp = Math.round(vm.temp * 1.8 + 32); //Fahren
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
			vm.temp = Math.round(data.main.temp); //Fahren
			vm.windDirect = data.wind.deg;
			vm.windSpeed = (data.wind.speed).toFixed(1); //MPH
			

			function dayNightSet(sunrise, sunset) {
				var time,
					sun = (Date.now() >= sunrise * 1000 && Date.now() <= sunset * 1000);

				sun ? time='day' : time='night';
				return time;
			}
		}
	}
})();