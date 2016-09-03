(function() {
	'use strict';

	angular
		.module('app.weather')
		.directive('statusTemp', statusTemp);

	function statusTemp() {
		return {
			templateUrl: 'app/weather/directives/statusTemp.html',
			restrict: 'E',
			scope: {},
			controller: StatusTempController,
			controllerAs: 'vm'
		};
	}

	StatusTempController.$inject = ['weatherService'];

	function StatusTempController(weatherService) {
		var vm = this;

		vm.dayNight;
		vm.desc;
		vm.icon;
		vm.temp;
		
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
			vm.icon = data.weather[0].id;
			vm.temp = Math.round(data.main.temp); //Fahren
			

			function dayNightSet(sunrise, sunset) {
				var time,
					sun = (Date.now() >= sunrise * 1000 && Date.now() <= sunset * 1000);

				sun ? time='day' : time='night';
				return time;
			}
		}
	}
})();