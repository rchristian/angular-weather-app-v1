(function() {
	'use strict';

	angular
		.module('app.weather')
		.component('weather', {
			templateUrl: 'weather/weather.html',
			controller: WeatherController,
			bindings: {}
	});

	WeatherController.$inject = ['weatherService', 'conversionService'];

	function WeatherController(weatherService, conversionService) {
		var ctrl = this;

		ctrl.conversionService = conversionService;
		ctrl.dayNight;
		ctrl.desc;
		ctrl.humid;
		ctrl.icon;
		ctrl.temp;
		ctrl.windDirect;
		ctrl.windSpeed;

		activate();

		function activate() {
			return weatherService.getWeather().then(function(data) {
					weatherInfo(data);
				});
		}

		function weatherInfo(data) {
			var sunrise = data.sys.sunrise;
			var sunset = data.sys.sunset;

			ctrl.dayNight = dayNightSet(sunrise, sunset);
			ctrl.desc = data.weather[0].description;
			ctrl.humid = data.main.humidity;
			ctrl.icon = data.weather[0].id;
			ctrl.temp = Math.round(data.main.temp); //Fahren
			ctrl.windDirect = data.wind.deg;
			ctrl.windSpeed = (data.wind.speed).toFixed(0); //MPH
			

			function dayNightSet(sunrise, sunset) {
				var time,
					sun = (Date.now() >= sunrise * 1000 && Date.now() <= sunset * 1000);

				sun ? time='day' : time='night';
				return time;
			}
		}
	}
})();