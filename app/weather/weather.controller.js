(function() {
	'use strict';

	angular
		.module('app.weather')
		.controller('WeatherController', WeatherController);

	WeatherController.$inject = ['weatherService'];

	function WeatherController(weatherService) {
		var vm = this;

		vm.dayNight;
		vm.desc;
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